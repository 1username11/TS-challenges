import type { Equal } from '@type-challenges/utils'

type Includes<Value extends any[], Item> =
	Equal<Value[0], Item> extends true
		? true
		: Value extends [Value[0], ...infer rest]
			? Includes<rest, Item>
			: false;
