import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save(
      { className: 'peak-marquee' }
    ) }>
      { attributes.marquee.map( (marqueeItem, index) => {
        return (
          <div key={index} className="peak-marquee-headline">
            <RichText.Content
              tagName="h2"
              className="peak-marquee-item"
              value={ marqueeItem.content }
            />
          </div>
        )
      })}
		</div>
	);
}
