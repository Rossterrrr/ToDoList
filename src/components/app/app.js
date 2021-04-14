import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[{
                label:'Going to learn React',
                important:true,
                id:243
            },{
                label:'That is so good',
                important:false,
                id:1
            },{
                label:'I need a break...',
                important:false,
                id:23
            }],
            searchText:''
        }
        this.onDelete = this.onDelete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onFind = this.onFind.bind(this);
        this.maxId = 24;
    }
    onDelete(id){
        this.setState(({data}) => {
            const newArr = data.filter((elem,i) => {
                if(id === elem.id){
                    return false;
                }else {
                    return true;
                }
            })
            return {
                data:newArr
            }
        })
    }
    onSubmit(e,value){
        e.preventDefault();
        this.setState(({data}) => {
            this.maxId++;
            const newElem = {
                label:value,
                important:false,
                id:this.maxId
            }
            const newArr = [...data,newElem];
            return{
                data:newArr
            }
        })
    }
    onSearch(text){
       this.setState({
           searchText:text
        })
    }
    onFind(dataNotMod,textNotMod){
        const data = dataNotMod.map((item) => {
            item.label = item.label.toLowerCase();
            return item;
        });
        const text = textNotMod.toLowerCase();
        if(text === ''){
            return data;
        }else {
            return data.filter((item) => {
                return item.label.indexOf(text) > -1
            });
        }
    }
    render(){
       const visiblePosts = this.onFind(this.state.data,this.state.searchText);
        return(
            <div className="app">
                <AppHeader></AppHeader>
                <div className="search-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}></SearchPanel>
                    <PostStatusFilter></PostStatusFilter>
                </div>
                <PostList posts ={visiblePosts} onDelete={this.onDelete}></PostList>
                <PostAddForm onSubmit={this.onSubmit}></PostAddForm>
            </div>
            
            
        );
    }    
}
