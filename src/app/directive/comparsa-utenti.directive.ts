import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appComparsaUtenti]'
})
export class ComparsaUtentiDirective {

    constructor(private tRef: TemplateRef<any>, private cRef: ViewContainerRef) { }

    @Input() set appComparsaUtenti(variabile: boolean) {
        if (!variabile) {
            this.cRef.createEmbeddedView(this.tRef);
        } else {
            this.cRef.clear();
        }
    }

}
