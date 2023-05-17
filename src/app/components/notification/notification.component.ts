import { Component, ElementRef, Inject, Input } from "@angular/core";
import { fromEvent, Observer, timer } from "rxjs";
import { repeatWhen, takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "notification",
  templateUrl: "./notification.template.html",
  styleUrls: ["./notification.style.less"]
})
export class NotificationComponent<T> {
  @Input()
  observer?: Observer<T>;

  readonly mouseenter$ = fromEvent(this.elementRef.nativeElement, "mouseenter");

  readonly mouseleave$ = fromEvent(this.elementRef.nativeElement, "mouseleave");

  readonly close$ = timer(3000).pipe(
    takeUntil(this.mouseenter$),
    repeatWhen(() => this.mouseleave$),
    tap(this.close.bind(this))
  );

  constructor(
    @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>
  ) {}

  close() {
    this.observer?.complete();
  }
}
