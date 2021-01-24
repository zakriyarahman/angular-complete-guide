import { Directive, ElementRef, HostListener, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
    'selector': '[appDropdown]'
});

export class DropdownDirective implements OnInit {
    @HostListener('click') toggleOpen

    ngOnInit() {

    }

    constructor(private elementRef: ElementRef, private vcRef: ViewContainerRef) {}
}
