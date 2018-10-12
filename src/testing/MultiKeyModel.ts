import { Model, PrimaryKey, SecondaryKey, IMetaModel, IModel } from '@/index'

/**
 * Example of a MultiKey model
 */
@Model({
	description: 'Description',
	kind: 'MultiKey',
	indexes: [{ primaryKey: 'hash', secondaryKey: 'title' }]
})
export class MultiKey implements IModel {
	static meta: IMetaModel
	meta: IMetaModel

	@PrimaryKey
	hash: string

	@SecondaryKey
	range: string

	title: string
}
