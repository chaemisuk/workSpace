// gnb_area [gslMfNrE8v]
(function() {
  $(function() {
    $(".gnb_area").each(function() {
      const $block = $(this);
      // Header Scroll
      $(window).on("load scroll", function() {
        const $thisTop = $(this).scrollTop();
        if ($thisTop > 0) {
          $block.addClass("block-scroll-active");
        } else {
          $block.removeClass("block-scroll-active");
        }
      });
      // Gnb
      $block.find(".header-center").on("mouseover", function() {
        if (window.innerWidth > 992) {
          $block.addClass("block-active");
        }
      });
      $block.find(".header-center").on("mouseout", function() {
        if (window.innerWidth > 992) {
          $block.removeClass("block-active");
        }
      });
      // Gnb DecoLine
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").removeClass("on");
          }
        });
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb Search
      $block.find(".btn-search").on("click", function() {
        $block.find(".header-search").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        // $block.find(".header-fullmenu").removeClass("fullmenu-active");
        $block.find(".header-search").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
      $block.find(".fullmenu-gnblink").each(function() {
        const $this = $(this);
        $this.on("click", function(e) {
          if (window.innerWidth > 992) {
            e.preventDefault();
          }
          if (window.innerWidth <= 992) {
            $this.toggleClass("on").next(".fullmenu-sublist").slideToggle().closest(".fullmenu-gnbitem").siblings().find(".fullmenu-gnblink").removeClass("on").next(".fullmenu-sublist").slideUp();
          }
        });
      });
    });
    $(window).on({
      resize: function() {
        if ($(window).width() > 992) {
          $(".fullmenu-sublist").slideDown(0);
        }
        if ($(window).width() <= 992) {
          $(".fullmenu-gnblink").removeClass("on").next(".fullmenu-sublist").slideUp(0);
        }
      },
    });
    $('.btn-user').on('click', function() {
      $('.modal').css('display', 'block')
      $('.dim').css('display', 'block')
    })
    $('.modal-close').on('click', function() {
      $('.modal').css('display', 'none')
      $('.dim').css('display', 'none')
    })
  });
})();
// gnb_balck [TMLmFnTk5v]
(function() {
  $(function() {
    $(".gnb_balck").each(function() {
      const $block = $(this);
      // Gnb
      $block.find(".header-center").on("mouseover", function() {
        if (window.innerWidth > 992) {
          $block.addClass("block-active");
        }
      });
      $block.find(".header-center").on("mouseout", function() {
        if (window.innerWidth > 992) {
          $block.removeClass("block-active");
        }
      });
      // Gnb DecoLine
      $block.find(".header-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".header-gnblink").removeClass("on");
          }
        });
      });
      // Full Gnb
      $block.find(".btn-allmenu").on("click", function() {
        $block.find(".header-fullmenu").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        $block.find(".header-fullmenu").removeClass("fullmenu-active");
      });
      // Full Gnb Search
      $block.find(".btn-search").on("click", function() {
        $block.find(".header-search").addClass("fullmenu-active");
      });
      $block.find(".fullmenu-close").on("click", function() {
        // $block.find(".header-fullmenu").removeClass("fullmenu-active");
        $block.find(".header-search").removeClass("fullmenu-active");
      });
      // Full Gnb DecoLine
      $block.find(".fullmenu-gnbitem").each(function() {
        const $this = $(this);
        $this.on("mouseover", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").addClass("on");
          }
        });
        $this.on("mouseout", function() {
          if (window.innerWidth > 992) {
            $this.find(".fullmenu-gnblink").removeClass("on");
          }
        });
      });
      $block.find(".fullmenu-gnblink").each(function() {
        const $this = $(this);
        $this.on("click", function(e) {
          if (window.innerWidth > 992) {
            e.preventDefault();
          }
          if (window.innerWidth <= 992) {
            $this.toggleClass("on").next(".fullmenu-sublist").slideToggle().closest(".fullmenu-gnbitem").siblings().find(".fullmenu-gnblink").removeClass("on").next(".fullmenu-sublist").slideUp();
          }
        });
      });
    });
    $(window).on({
      resize: function() {
        if ($(window).width() > 992) {
          $(".fullmenu-sublist").slideDown(0);
        }
        if ($(window).width() <= 992) {
          $(".fullmenu-gnblink").removeClass("on").next(".fullmenu-sublist").slideUp(0);
        }
      },
    });
  });
})();