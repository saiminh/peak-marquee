import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button, ButtonGroup, Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit( {attributes, setAttributes} ) {

  const [ marqueeContent, setMarqueeContent ] = useState( attributes.marquee );

  const updateMarquee = ( content, index ) => {
    let newMarqueeContent = [ ...marqueeContent ];
    newMarqueeContent[ index ].content = content;
    setMarqueeContent( newMarqueeContent )
    setAttributes( { marquee: newMarqueeContent } );
  }
  const addMarquee = () => {
    let newMarquee = [ ...marqueeContent ];
    newMarquee.unshift( { content:'New Headline' } );
    setMarqueeContent( newMarquee );
    setAttributes( { marquee: newMarquee } );
  }
  const remove = ( index ) => {
    let newMarquee = marqueeContent.filter( (marqueeItem) => marqueeItem != marqueeContent[index] );
    setMarqueeContent( newMarquee );
    setAttributes( { marquee: newMarquee } );
  };

  const moveUp = ( index ) => {
    if ( index === 0 ) {
      return;
    }
    let newMarquee = [ ...marqueeContent ];
    let thisMarqueeItem = newMarquee.splice( index, 1 )[0];
    newMarquee.splice(index-1, 0, thisMarqueeItem );
    setMarqueeContent( newMarquee );
    setAttributes( { marquee: newMarquee } );
  }
  const moveDown = ( index ) => {
      if ( index === marqueeContent.length - 1 ) {
        return;
      }
      let newMarquee = [ ...marqueeContent ];
      let thisMarqueeItem = newMarquee.splice( index, 1 )[0];
      newMarquee.splice(index+1, 0, thisMarqueeItem );
      setMarqueeContent( newMarquee );
      setAttributes( { marquee: newMarquee } );
  }

	return (
		<div { ...useBlockProps(
      { className: 'peak-marquee' }
    ) }>
			{ attributes.marquee.map( (marqueeItem, index) => {
        return (
          <div key={index} className="peak-marquee-headline">
            <RichText
              tagName="h2"
              className="peak-marquee-item"
              value={ marqueeItem.content }
              onChange={ (content) => updateMarquee(content, index) }
            />
            <ButtonGroup className='ui-button-group'>
              <Button className='remove-ui-button' onClick={ () => remove(index) }><Dashicon icon="trash" /></Button>
              { index != 0 && <Button className='up-ui-button' onClick={ () => moveUp(index) }><Dashicon icon="arrow-up-alt2" /></Button>}
              { index < attributes.marquee.length - 1 && <Button className='down-ui-button' onClick={ () => moveDown(index) }><Dashicon icon="arrow-down-alt2" /></Button>}
            </ButtonGroup>
          </div>
        )
      })}
        <Button className='add-ui-button' onClick={ addMarquee }><Dashicon icon="insert" /> New Headline</Button>
		</div>
	);
}
