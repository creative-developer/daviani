// Animation On Scroll Class
class AnimationOnScroll {
  constructor(props) {
    // props
    this.jsonUrl = props.jsonUrl;
    this.aosOptions = props.aosOptions;
    this.animations = {};
  }

  getPage() {
    return $('main').attr('class');
  }

  getAnimationOptions() {
    $.ajax({
      type: 'GET',
      url: this.jsonUrl, // demo
      dataType: 'json',
      success: response => {
        this.animations = response; // saving
        this.animate();
      },
      error: (jqXHR, textStatus, errorThrown) => {
        console.log('animations GET error: ' + this.jsonUrl + ' - ' + errorThrown + '!');
      },
    }).done(() => {
      console.log(this.aosOptions);
      AOS.init(this.aosOptions);
    });
  }

  setAttrs(el) {
    const elements = $(el.el);

    // accept empty animations obj
    el.animation = el.animation !== undefined ? el.animation : {};

    // set animation class
    elements.attr('data-aos', el.animation.class !== undefined ? el.animation.class : 'fade-up');
    // set animation duration
    if (el.animation.duration !== undefined) {
      elements.attr('data-aos-duration', el.animation.duration);
    }
    // set animation offset
    if (el.animation.offset !== undefined) {
      elements.attr('data-aos-offset', el.animation.offset);
    }

    // set animation delay
    if (el.animation.increment) {
      // increment animation
      let delay = el.animation.direction === 'reverse' ? elements.length + '00' : 0;
      const maxIteration = el.animation.maxIteration !== undefined ? el.animation.maxIteration : elements.length;

      for (let i = 0; i < maxIteration; i++) {
        $(elements[i]).attr('data-aos-delay', delay);
        delay = el.animation.direction === 'reverse' ? (delay -= 100) : (delay += 100);
      }
    } else {
      // single animation
      if (el.animation.delay !== undefined) {
        elements.attr('data-aos-delay', el.animation.delay);
      }
    }
  }

  animate() {
    const currentPage = this.animations[this.getPage()];

    // Common animations init
    if (this.animations.common !== undefined) {
      this.animations.common.forEach(el => {
        // init only visible elements
        if ($(el.el).is(':visible')) {
          this.setAttrs(el);
        }
      });
    }

    // Current page animations init
    if (currentPage !== undefined) {
      currentPage.forEach(el => {
        // init only visible elements
        if ($(el.el).is(':visible')) {
          this.setAttrs(el);
        }
      });
    }
  }

  init() {
    this.getAnimationOptions();
  }
}

export const aosAnimationInit = () => {
  // Animation on scroll
  const anim = new AnimationOnScroll({
    jsonUrl: '/js/animations.json',
    aosOptions: {
      offset: 50,
      duration: 700,
      // once: true,
      disable: function () {
        const maxWidth = 1200;
        const isMobile = document.documentElement.clientWidth < maxWidth;
        console.log(isMobile);
        return !isMobile;
      },
    },
  });

  // Init animations
  anim.init();
};
