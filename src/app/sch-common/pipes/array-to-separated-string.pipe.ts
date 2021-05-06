import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'ArrayToSeparatedString'
})

export class ArrayToSeparatedStringPipe implements PipeTransform{

    transform(targetArray: Array<string>, separatorType: string = ','){
        return targetArray.join(separatorType);
    }
}