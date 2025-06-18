// package: example.complex
// file: complex.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Dummy extends jspb.Message { 
    getId(): number;
    setId(value: number): Dummy;
    getName(): string;
    setName(value: string): Dummy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dummy.AsObject;
    static toObject(includeInstance: boolean, msg: Dummy): Dummy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dummy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dummy;
    static deserializeBinaryFromReader(message: Dummy, reader: jspb.BinaryReader): Dummy;
}

export namespace Dummy {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class Complex extends jspb.Message { 

    hasDummyOne(): boolean;
    clearDummyOne(): void;
    getDummyOne(): Dummy | undefined;
    setDummyOne(value?: Dummy): Complex;
    clearDummyListList(): void;
    getDummyListList(): Array<Dummy>;
    setDummyListList(value: Array<Dummy>): Complex;
    addDummyList(value?: Dummy, index?: number): Dummy;

    getDummyMapMap(): jspb.Map<string, Dummy>;
    clearDummyMapMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Complex.AsObject;
    static toObject(includeInstance: boolean, msg: Complex): Complex.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Complex, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Complex;
    static deserializeBinaryFromReader(message: Complex, reader: jspb.BinaryReader): Complex;
}

export namespace Complex {
    export type AsObject = {
        dummyOne?: Dummy.AsObject,
        dummyListList: Array<Dummy.AsObject>,

        dummyMapMap: Array<[string, Dummy.AsObject]>,
    }
}
