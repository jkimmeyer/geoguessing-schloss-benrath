import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import React, { ReactNode } from 'react';
import { ImageType } from '../../types';
import Image from 'next/image'
import '@splidejs/react-splide/css';
import thumbnailStyles from '../../assets/stylesheets/thumbnail.module.css'

interface Props {
  images: ImageType[];
}

export class SbThumbnailGallery extends React.Component<Props> {
  /**
   * The main Splide component.
   */
  mainRef = React.createRef<Splide>();

  /**
   * The thumbnail Splide component.
   */
  thumbsRef = React.createRef<Splide>();

  /**
   * Set the sync target right after the component is mounted.
   */
  componentDidMount(): void {
    if (this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide) {
      this.mainRef.current.sync(this.thumbsRef.current.splide);
    }
  }

  /**
   * Render slides.
   *
   * @return Slide nodes.
   */
  renderSlides(): ReactNode[] {
    return this.props.images.map(slide => (
      <SplideSlide key={slide.url}>
        <Image src={slide.url} alt={slide.alt} width={slide.width} height={slide.height} className={thumbnailStyles['thumbnail--image']} />
      </SplideSlide>
    ));
  }

  /**
   * Render the component.
   *
   * @return A React node.
   */
  render(): ReactNode {
    const mainOptions: Options = {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      pagination: false,
      autoHeight: true,
      width: "100%",
      arrows: false,
    };

    const thumbsOptions: Options = {
      type: 'slide',
      rewind: true,
      pagination: false,
      fixedWidth: 120,
      fixedHeight: 80,
      cover: true,
      focus: 'center',
      isNavigation: true,
      trimSpace: true,
    };

    return (
      <div className={ thumbnailStyles["thumbnail"]}>
        <Splide
          options={mainOptions}
          ref={this.mainRef}
          aria-labelledby="thumbnail-slider-example"
        >
          {this.renderSlides()}
        </Splide>

        <div className={thumbnailStyles["thumbnail--navigation"]}>
          <Splide
            options={thumbsOptions}
              ref={this.thumbsRef}
            aria-label="Multiple Images of this object"
          >
            {this.renderSlides()}
          </Splide>
        </div>
      </div>
    );
  }
}
