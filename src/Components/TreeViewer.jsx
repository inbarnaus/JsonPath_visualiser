import React, {useState} from 'react'
import JsonViewer from 'searchable-react-json-view';
import { Lookup } from 'react-rainbow-components';
// var jp = require('JSONPath');

const treeBox = {
    backgroundColor: 'white',
    margin: '30px',
    width: '400px',
    display: 'flex',
    borderRadius: '45px',
    boxShadow: '5px 10px 15px hsl(180, 29%, 50%)',
    justifyContent: 'center',
    padding: '10px'
}

export default function TreeViewer(props){
    const [search, setSearch] = useState('');

    function handleChangeSearch(event){
        // var cities = [
        //     { name: "London", "population": 8615246 },
        //     { name: "Berlin", "population": 3517424 },
        //     { name: "Madrid", "population": 3165235 },
        //     { name: "Rome",   "population": 2870528 }
        //   ];
        //   var names = jp.query(cities, '$..name');
        // var names = jp.query(props.json, "$..[?(@.price < 10)]");
        // console.log(names);
        setSearch(event)
    }
    return (
        <div>
        <Lookup 
            style={{width: '400px', margin: 'auto', paddingTop: '20px',fontFamily: 'Candara'}}
            placeholder="Search"
            onSearch={handleChangeSearch}
        />
        <div style={treeBox}>
        <JsonViewer 
            style={{fontFamily: 'Candara', color:'hsl(180, 29%, 50%)'}}
            src={props.json} 
            iconStyle='circle' 
            enableClipboard={false} 
            collapsed={1} 
            displayDataTypes={false} 
            displayObjectSize={false}
            quotesOnKeys={false}
            displayArrayKey={false}
            customActions={[{
                icon: <span> a</span>,
                onClick: (value) => alert(JSON.stringify(value))
            }]}
            highlightSearch={search}
            />
        </div>
        </div>
    );
}