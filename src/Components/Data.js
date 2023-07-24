const Data = [
    {
      bg:"#26030a",    
      data:[
          {// The Middle one
              position:[0.5, -0.2, 0],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              scale:0.1
          }, 
          {// The Middle right
            position:[0.5, -.2, 1],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.2,
            scale:0.1
          }, 
          { // The Middle Left
            position:[0.5, -.2, -1],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.2,
            scale:0.3
          },
          { // The top right
              position:[0, .4, 1],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.2,
              scale:0.3
          },
          { // The Middle Top
            position:[0, .4, 0],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.2,
            scale:0.3
        },
          { // The Top Left
              position:[0, 0.4, -1],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.2,
              scale:0.4
            },
            { // The Bottom Right
              position:[0, -1, 1],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.2,
              scale:0.3
            },
            { // The bottom left
              position:[0, -1, -1],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.2,
              scale:0.3
            },
            { // The middle bottom
              position:[0, -1, 0],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.2,
              scale:0.3
            }
      ]
    },

    {
        bg:"salmon",    
        data:[
          // First Layer
            {
                position:[0, .9, 0.25],
                rotation:[0, 0, 0.715],
                factor: 0.75 + Math.random() * 2,
                direction: Math.random() < 0.5 ? -1 : 1,
                size:0.1,
                colors:"0xff0000",
                scale:1
            }, 
            {
              position:[0, .9, 0.75],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            }, 
            {
              position:[0, .9, 1.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, .9, -.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, .9, -.75],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, .9, -1.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },

            // Second Layer
            {
              position:[0, .7, 0.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
          }, 
          {
            position:[0, .7, 0.75],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          }, 
          {
            position:[0, .7, 1.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, .7, -.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, .7, -.75],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, .7, -1.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },

                      {
                position:[0, .9, 0.25],
                rotation:[0, 0, 0.715],
                factor: 0.75 + Math.random() * 2,
                direction: Math.random() < 0.5 ? -1 : 1,
                size:0.1,
                colors:"0xff0000",
                scale:0.1
            }, 
            {
              position:[0, .9, 0.75],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            }, 
            {
              position:[0, .9, 1.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, .9, -.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, .9, -.75],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, .9, -1.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },

            // Third Layer

            {
              position:[0, .5, 0.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
          }, 
          {
            position:[0, .5, 0.75],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          }, 
          {
            position:[0, .5, 1.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, .5, -.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, .5, -.75],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, .5, -1.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },

          // Fourth Layer

          {
            position:[0, .3, 0.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
        }, 
        {
          position:[0, .3, 0.75],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        }, 
        {
          position:[0, .3, 1.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },
        {
          position:[0, .3, -.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },
        {
          position:[0, .3, -.75],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },
        {
          position:[0, .3, -1.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },

        // Fifth Layer

        {
          position:[0, .1, 0.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
      }, 
      {
        position:[0, .1, 0.75],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      }, 
      {
        position:[0, .1, 1.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, .1, -.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, .1, -.75],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, .1, -1.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },




        // Tenth Layer
      {
          position:[0, -.9, 0.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
      }, 
      {
        position:[0, -.9, 0.75],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      }, 
      {
        position:[0, -.9, 1.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, -.9, -.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, -.9, -.75],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, -.9, -1.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
  
              // Nineth Layer
            {
                position:[0, -.7, 0.25],
                rotation:[0, 0, 0.715],
                factor: 0.75 + Math.random() * 2,
                direction: Math.random() < 0.5 ? -1 : 1,
                size:0.1,
                colors:"0xff0000",
                scale:0.1
            }, 
            {
              position:[0, -.7, 0.75],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            }, 
            {
              position:[0, -.7, 1.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, -.7, -.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, -.7, -.75],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },
            {
              position:[0, -.7, -1.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
            },  
              // Eigth Layer
  
      {
          position:[0, -.5, 0.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
      }, 
      {
        position:[0, -.5, 0.75],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      }, 
      {
        position:[0, -.5, 1.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, -.5, -.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, -.5, -.75],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
      {
        position:[0, -.5, -1.25],
        rotation:[0, 0, 0.715],
        factor: 0.75 + Math.random() * 2,
        direction: Math.random() < 0.5 ? -1 : 1,
        size:0.1,
        colors:"0xff0000",
        scale:0.1
      },
  
            // Nineth Layer
  
            {
              position:[0, -.3, 0.25],
              rotation:[0, 0, 0.715],
              factor: 0.75 + Math.random() * 2,
              direction: Math.random() < 0.5 ? -1 : 1,
              size:0.1,
              colors:"0xff0000",
              scale:0.1
          }, 
          {
            position:[0, -.3, 0.75],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          }, 
          {
            position:[0, -.3, 1.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, -.3, -.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, -.3, -.75],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
          {
            position:[0, -.3, -1.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
          },
  
          // Tenth Layer
  
          {
            position:[0, -.1, 0.25],
            rotation:[0, 0, 0.715],
            factor: 0.75 + Math.random() * 2,
            direction: Math.random() < 0.5 ? -1 : 1,
            size:0.1,
            colors:"0xff0000",
            scale:0.1
        }, 
        {
          position:[0, -.1, 0.75],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        }, 
        {
          position:[0, -.1, 1.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },
        {
          position:[0, -.1, -.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },
        {
          position:[0, -.1, -.75],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },
        {
          position:[0, -.1, -1.25],
          rotation:[0, 0, 0.715],
          factor: 0.75 + Math.random() * 2,
          direction: Math.random() < 0.5 ? -1 : 1,
          size:0.1,
          colors:"0xff0000",
          scale:0.1
        },



            // {// The Middle right
            //   position:[0.5, -.2, 1],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   colors:"0x00ff00",
            //   scale:0.1
            // }, 
            // { // The Middle Left
            //   position:[0.5, -.2, -1],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   colors:"0x0000ff",
            //   scale:0.3
            // },
            // { // The top right
            //     position:[0, .4, 1],
            //     rotation:[0, 0, 0.715],
            //     factor: 0.75 + Math.random() * 2,
            //     direction: Math.random() < 0.5 ? -1 : 1,
            //     size:0.1,
            //     colors:"0xffff00",
            //     scale:0.3
            // },
            // { // The Middle Top
            //   position:[0.5, .4, 0],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   colors:"0xff00ff",
            //   scale:0.3
            // },
            // { // The Top Left
            //   position:[0, 0.4, -1],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   colors:"0x00ffff",
            //   scale:0.4
            // },
            // { // The Bottom Right
            //   position:[0, -1, 1],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   scale:"0xffff00",
            //   scale:0.3
            // },
            // { // The bottom left
            //   position:[0, -1, -1],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   colors:"0xff00ff",
            //   scale:0.3
            // },
            // { // The middle bottom
            //   position:[0, -1, 0],
            //   rotation:[0, 0, 0.715],
            //   factor: 0.75 + Math.random() * 2,
            //   direction: Math.random() < 0.5 ? -1 : 1,
            //   size:0.1,
            //   colors:"0x00ffff",
            //   scale:0.3
            // }
        ]
      },
  ]
  
  export default Data