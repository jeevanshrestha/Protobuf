// package: example.enumerations
// file: enumerations.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Enumeration extends jspb.Message { 
    getEyeColor(): EyeColor;
    setEyeColor(value: EyeColor): Enumeration;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Enumeration.AsObject;
    static toObject(includeInstance: boolean, msg: Enumeration): Enumeration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Enumeration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Enumeration;
    static deserializeBinaryFromReader(message: Enumeration, reader: jspb.BinaryReader): Enumeration;
}

export namespace Enumeration {
    export type AsObject = {
        eyeColor: EyeColor,
    }
}

export enum EyeColor {
    EYE_COLOR_UNSPECIFIED = 0,
    EYE_COLOR_GREEN = 1,
    EYE_COLOR_BLUE = 2,
    EYE_COLOR_BROWN = 3,
}
