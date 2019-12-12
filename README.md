# rrMetaData

A plugin for you metadata handling. It provides metadata crud functionality.

## Installation

Use the npm package manager to install rrMetaData.

```bash
$ npm instal rrmetadata
```

## Usage

```js
import MetaData from 'metadata';
or
const MetaData = require('metadata');
```

## Functions

#### insert(key, vlaue) 
 To set a new metadata in the database
```js
MetaData.insert('key','value');
MetaData.insert('foo','bar');


- Insert Json data

const address={
   city: 'Mohali',
   state: 'Punjab',
   country: 'India'
}
MetaData.insert('personal_address',address);
```


#### get(key)
get latest meta value by using key

```js
MetaData.get('foo');
>> bar
```

#### getAll(key)
get all meta value that key matched

```js
MetaData.insert('name','boo');
MetaData.insert('name','foo');

MetaData.getAll('name');
>>[{name:'boo'},{name:'foo'}]

```

#### update(id,key,value)

```js
MetaData.update(1,'name','jack');
```

#### remove(id) - remove by id
```js
MetaData.remove("5d64d7ed72bcd714f168976d");
```

#### removeByKey(key) 

```js
MetaData.removeByKey('name');
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)