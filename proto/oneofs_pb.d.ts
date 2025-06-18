// package: example.oneofs
// file: oneofs.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Result extends jspb.Message { 

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): string;
    setMessage(value: string): Result;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): number;
    setCode(value: number): Result;

    getResultCase(): Result.ResultCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
    export type AsObject = {
        message: string,
        code: number,
    }

    export enum ResultCase {
        RESULT_NOT_SET = 0,
        MESSAGE = 1,
        CODE = 2,
    }

}
