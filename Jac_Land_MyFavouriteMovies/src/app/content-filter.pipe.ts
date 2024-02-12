import { Pipe, PipeTransform } from '@angular/core';

import { Content } from './helper-files/content-interface';

@Pipe({
    name: 'contentFilter'
})

export class ContentFilterPipe implements PipeTransform {
    transform(contentList: Content[]) {
        return contentList.filter(c => c.type !=null ? c.type.length : null)
    }
}