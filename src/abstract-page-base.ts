import { RecursivePartial } from 'shallow-render'
import { Rendering } from 'shallow-render/dist/lib/models/rendering'

export class AbstractPageBase<C> {
  // public readonly component = this.rendering.fixture.componentInstance as C
  // public readonly bindings = this.rendering.bindings
  // public readonly outputs = this.rendering.outputs as RecursivePartial<C>
  // public readonly isVisible = this.rendering.element.nativeElement !== undefined
  // protected readonly instance = this.rendering.instance
  //
  // protected readonly find = this.rendering.find
  // protected readonly fixture = this.rendering.fixture
  // protected readonly element = this.rendering.element
  // protected readonly findComponent = this.rendering.findComponent
  //
  constructor(protected readonly rendering: Rendering<C, RecursivePartial<C>>) {
//    this.detectChanges()
  }

  //
  // public detectChanges() {
  //   this.rendering.fixture.detectChanges()
  // }
  //
  // public get isStable() {
  //   return this.fixture.isStable()
  // }
}
