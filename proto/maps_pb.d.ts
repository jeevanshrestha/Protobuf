// package: example.maps
// file: maps.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class IdWrapper extends jspb.Message { 
    getId(): number;
    setId(value: number): IdWrapper;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdWrapper.AsObject;
    static toObject(includeInstance: boolean, msg: IdWrapper): IdWrapper.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdWrapper, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdWrapper;
    static deserializeBinaryFromReader(message: IdWrapper, reader: jspb.BinaryReader): IdWrapper;
}

export namespace IdWrapper {
    export type AsObject = {
        id: number,
    }
}

export class MapExample extends jspb.Message { 

    getIdsMap(): jspb.Map<string, IdWrapper>;
    clearIdsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapExample.AsObject;
    static toObject(includeInstance: boolean, msg: MapExample): MapExample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MapExample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapExample;
    static deserializeBinaryFromReader(message: MapExample, reader: jspb.BinaryReader): MapExample;
}

export namespace MapExample {
    export type AsObject = {

        idsMap: Array<[string, IdWrapper.AsObject]>,
    }
}
