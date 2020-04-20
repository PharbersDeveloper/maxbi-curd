"use strict"
import { prop, Typegoose } from "typegoose"
// import Metadata from "./Metadata"
import IModelBase from "./modelBase"

class Diagram extends Typegoose implements IModelBase<Diagram> {

    // @prop({ ref: Metadata, default: null, required: true })
    // public metadata?: Ref<Metadata>

    @prop({ default: [], required: true })
    public colorPool: object

    @prop({ default: [], required: true })
    public commonts: object

    @prop({ default: [], required: false })
    public dimension: object

    @prop({ default: [], required: false })
    public dimensions: object

    @prop({ default: null, required: true })
    public measure: object

    @prop({ default: null, required: false })
    public geo: object

    @prop({ default: null, required: true })
    public grid: object

    @prop({ default: null, required: false })
    public pieAxis: object

    @prop({ default: null, required: false })
    public polar: object

    @prop({ default: "", required: true })
    public title: string

    @prop({ default: "", required: true })
    public type: string

    @prop({ default: null, required: false })
    public xAxis: object

    @prop({ default: "", required: false })
    public yAxis: object

    @prop({ default: null, required: false })
    public fetch: object

    public getModel() {
        return this.getModelForClass(Diagram)
    }
}

export default Diagram
