import { Meow } from "../Meows/Meow";
import "./Column.css"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

export const Column = ({ meows}) => {
    return <div className="column">
        <SortableContext items={meows} strategy={verticalListSortingStrategy}>
            {meows.map(meow => <Meow id={meow.id} title={meow.title} key={meow.id} />)}
        </SortableContext>
        
    </div>;
}