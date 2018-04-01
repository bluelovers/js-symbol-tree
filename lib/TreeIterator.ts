'use strict';

const TREE = Symbol();
const ROOT = Symbol();
const NEXT = Symbol();
const ITERATE_FUNC = Symbol();

class TreeIterator
{
	constructor(tree, root, firstResult, iterateFunction: number)
	{
		this[TREE] = tree;
		this[ROOT] = root;
		this[NEXT] = firstResult;
		this[ITERATE_FUNC] = iterateFunction;
	}

	next()
	{
		const tree = this[TREE];
		const iterateFunc = this[ITERATE_FUNC];
		const root = this[ROOT];

		if (!this[NEXT])
		{
			return {
				done: true,
				value: root,
			};
		}

		const value = this[NEXT];

		if (iterateFunc === 1)
		{
			this[NEXT] = tree._node(value).previousSibling;
		}
		else if (iterateFunc === 2)
		{
			this[NEXT] = tree._node(value).nextSibling;
		}
		else if (iterateFunc === 3)
		{
			this[NEXT] = tree._node(value).parent;
		}
		else if (iterateFunc === 4)
		{
			this[NEXT] = tree.preceding(value, { root: root });
		}
		else /* if (iterateFunc === 5)*/ {
			this[NEXT] = tree.following(value, { root: root });
		}

		return {
			done: false,
			value: value,
		};
	}

	[Symbol.iterator]()
	{
		return this;
	}
}

namespace TreeIterator
{
	export const PREV = 1;
	export const NEXT = 2;
	export const PARENT = 3;
	export const PRECEDING = 4;
	export const FOLLOWING = 5;
}

Object.freeze(TreeIterator);
Object.freeze(TreeIterator.prototype);

export default TreeIterator;
