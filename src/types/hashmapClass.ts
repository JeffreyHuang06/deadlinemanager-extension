// bc typescript doesnt like dynamically resizeable objects
import clone from '../utils/cloneObj'

export default class HashMap<K, V> {
    private hmap: any;

    constructor(init: Object = {}){
        // can either be object or hashmap
        if (init instanceof HashMap){
            this.hmap = clone(init.hmap);
        } else {
            this.hmap = init;
        }
    }

    public _(key: K): V {
        return this.hmap[key];
    }

    public s(key: K, val: V): void {
        this.hmap[key] = val;
    }

    public getKeys(): string[] {
        return Object.keys(this.hmap);
    }

    public getVals(): V[] {
        const ret: V[] = [];

        for (const k of this.getKeys()){
            ret.push(this.hmap[k]);
        }

        return ret;
    }

    public getObj(): Object {
        return this.hmap;
    }

    public clone(): HashMap<K, V> {
        return new HashMap<K, V>(clone(this.hmap));
    } 
}