var prequire = require('parent-require')
    , mongoose = prequire('mongoose');
const Metadata = require('./models/metaData');
module.exports.MetaDataModel = Metadata;
/**
 * Sigleton implementation of MetaData
 */
module.exports = MetaData = (function(){

    let instance;

    function create(){
        
        async function insert(key, value){
            
            const metadata = new Metadata;
            metadata.key = key;
            metadata.value = value;
            return await metadata.save();
            
        }

        async function get(key){
            const meta = await Metadata.findOne({key:key});
            return meta
        }

        async function getAll(key){
            const meta = await Metadata.find({key:key});
            return meta
        }

        async function update(id, key, value){
            const meta = await Metadata.update({id:id},{
                key:key,
                value:value
            },{new:true});
            return meta

        }

        async function remove(id){
            const meta = await Metadata.findById(id);
            if (meta) {
                await meta.remove();
        
                return true;
            } 
        
            return false;
        }

        async function removeByKey(key){
            const resp = await Metadata.deleteMany({key:key});
            return resp;
        }


        return {
            insert      :   insert,
            get         :   get,
            getAll      :   getAll,
            update      :   update,
            remove      :   remove,
            removeByKey :    removeByKey
        }
    
    }

    return {
        getInstance : function(){
            if(!instance){
                instance = create();
            }
            return instance;
        }
    }

})();
