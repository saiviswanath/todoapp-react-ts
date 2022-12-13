export class TodoModel {
    constructor(private _rowNum: number, private _rowDesc: string, private _rowAssign: string) {
    }
    
    public get rowNum(): number {
        return this._rowNum;
    }
    public set rowNum(value: number) {
        this._rowNum = value;
    }
    public get rowDesc(): string {
        return this._rowDesc;
    }
    public set rowDesc(value: string) {
        this._rowDesc = value;
    }
    public get rowAssign(): string {
        return this._rowAssign;
    }
    public set rowAssign(value: string) {
        this._rowAssign = value;
    }
}