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

const metaData = MetaData.getInstance();
```

## Functions

#### insert(key, vlaue) 
 To set a new metadata in the database
```js
meteData.insert('key','value');
meteData.insert('foo','bar');


- Insert Json data

const address={
   city: 'Mohali',
   state: 'Punjab',
   country: 'India'
}
meteData.insert('personal_address',address);
```


#### get(key)
get latest meta value by using key

```js
meteData.get('foo');
>> bar
```

#### getAll(key)
get all meta value that key matched

```js
meteData.insert('name','boo');
meteData.insert('name','foo');

meteData.getAll('name');
>>[{name:'boo'},{name:'foo'}]

```

#### update(id,key,value)

```js
meteData.update(1,'name','jack');
```

#### remove(id) - remove by id
```js
meteData.remove("5d64d7ed72bcd714f168976d");
```

#### removeByKey(key) 

```js
meteData.removeByKey('name');
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)