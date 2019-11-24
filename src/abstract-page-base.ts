import { RecursivePartial } from 'shallow-render'
import { Rendering } from 'shallow-render/dist/lib/models/rendering'
import { PickByType } from 'shallow-render/dist/lib/tools/output-proxy'
import { DebugElement, EventEmitter, Type } from '@angular/core'
import { QueryMatch } from 'shallow-render/dist/lib/models/query-match'

export class AbstractPageBase<C> {
  public readonly component: C = this.rendering.fixture.componentInstance
  public readonly bindings: RecursivePartial<C> = this.rendering.bindings
  public readonly outputs: PickByType<C, EventEmitter<any>> = this.rendering.outputs
  public readonly isVisible: boolean = this.rendering.element.nativeElement !== undefined
  protected readonly instance: C = this.rendering.instance

  protected readonly find: (cssOrDirective: (string | Type<any>), options?: ({ query?: string | undefined } | undefined)) => QueryMatch<DebugElement> = this.rendering.find
  protected readonly fixture = this.rendering.fixture
  protected readonly element: DebugElement = this.rendering.element
  protected readonly findComponent: <TMatch>(component: Type<TMatch>, options?: ({ query?: string | undefined } | undefined)) => QueryMatch<TMatch> = this.rendering.findComponent

  constructor(protected readonly rendering: Rendering<C, RecursivePartial<C>>) {
    this.detectChanges()
  }


  public detectChanges() {
    this.rendering.fixture.detectChanges()
  }

  public get isStable() {
    return this.fixture.isStable()
  }
}
