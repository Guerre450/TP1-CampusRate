import { Type } from "@nestjs/common";
import { FileHandle } from "fs/promises";

export interface PropertyKey {
    propertyName: string
    value: any
}

export function objectToPropertyKeyList(object: Object): PropertyKey[] {
    const propertyKeyList: PropertyKey[] = []
    Object.keys(object).forEach(key => {
        propertyKeyList.push({
            propertyName: key,
            value: object[key]
        })
    })
    return propertyKeyList;
}

export class JsonRepository<Type extends Object> {
    datas: Type[] = []
    constructor(fileHandlerTemp: FileHandle) {

    }

    create(entity: Type) {
        this.datas.push(entity);
    }

    private doesDataHasValue(data: Type, properties: PropertyKey[]): boolean {
        properties.forEach(element => {
            if (!data.hasOwnProperty(element.propertyName)) {
                return false;
            }
            if (data[element.propertyName] != element.value) {
                return false;
            }
        }
        )
        return true
    }

    findByProperties(properties: PropertyKey[]): Type | undefined {
        return this.datas.find(data => {
            return this.doesDataHasValue(data, properties)
        }
        )
    }
    listByProperties(properties: PropertyKey[]): Type[] {
        return this.datas.filter(
            data => {
                return this.doesDataHasValue(data, properties)
            })
    }

    

    private findIndexByProperties(properties: PropertyKey[]) : number {
        return this.datas.findIndex(
            data => {
                return this.doesDataHasValue(data, properties)
            })

    }

    deleteByProperties(properties: PropertyKey[]) : boolean{
        return this.delete(this.findIndexByProperties(properties));
    }

    private delete(index: number) : boolean {
        if (index < 0){
            return false
        }
        this.datas.splice(index, 1);
        return true;
    }



}