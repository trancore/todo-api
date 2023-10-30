/**
 * Todo API
 * Todoアプリケーション用API
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PostTodo {
    'title': string;
    /**
    * Todo説明
    */
    'description'?: string;
    /**
    * 対応期限
    */
    'deadlineAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "deadlineAt",
            "baseName": "deadlineAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PostTodo.attributeTypeMap;
    }
}

