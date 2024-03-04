import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
    ADVENTURE = 'Adventure', 
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
    FICTION = 'Fiction'
}

@Schema({
    timestamps:true
})

export class Book{
    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    author:string

    @Prop()
    price: number

    @Prop()
    category: Category


}

export const BookSchema = SchemaFactory.createForClass(Book)