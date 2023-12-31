window.addEventListener('load', function () {
  const customerLogged = document.querySelector('.main-body').dataset.customerLogged
  let productCardHeight = `${document.querySelector('.custom__product-card .product-card-img-wrapper > img').offsetHeight}px`
  const imgWrappers = document.querySelectorAll('.product-card-img-wrapper')
  const flickityBtns = document.querySelectorAll('.custom__product-card .flickity-button')

  const addHeight = (e) => {
    e.target.querySelector('.carousel').style.height = productCardHeight
    e.target.querySelector('.flickity-viewport').style.height = productCardHeight
    e.target.querySelectorAll('.carousel .carousel-cell').forEach(cell => {
      cell.style.height = productCardHeight
      cell.querySelector('img').style.height = productCardHeight
    })
  }

  const removeHeight = (e) => {
    e.target.querySelector('.carousel').style.height = "0"
    e.target.querySelector('.flickity-viewport').style.height = "0"
    e.target.querySelectorAll('.carousel .carousel-cell').forEach(cell => {
      cell.style.height = "0"
      cell.querySelector('img').style.height = productCardHeight
    })
  }

  const updateMainImg = (e) => {
    const productCard = e.target.closest('.custom__product-card').querySelector('.main_product_img')
    const newMainImgUrl = e.target.closest('.custom__product-card').querySelector('.carousel-cell.is-selected').dataset.variantMainImg
    productCard.srcset = newMainImgUrl
  }

  const updatePrice = (e) => {
    const newPriceData = e.target.closest('.custom__product-card').querySelector('.carousel-cell.is-selected').dataset.variantPrice
    const newComparePriceData = e.target.closest('.custom__product-card').querySelector('.carousel-cell.is-selected').dataset.variantComparePrice
    const priceContainer = e.target.closest('.custom__product-card').querySelector('.price--out-card')

    const productPriceElement = newComparePriceData ? e.target.closest('.custom__product-card').querySelector('span.price-item--sale') : e.target.closest('.custom__product-card').querySelector('span.price-item--regular')
    const compareProductPriceElement = e.target.closest('.custom__product-card').querySelector('.price__sale s.price-item--regular')

    if (!newComparePriceData) {
      productPriceElement.innerText = newPriceData
      priceContainer.classList.remove('price--on-sale')
      return
    }

    compareProductPriceElement.cl
    productPriceElement.innerText = newPriceData
    compareProductPriceElement.innerText = newComparePriceData
    priceContainer.classList.add('price--on-sale')
  }

  const addSelectedClass = (e) => {
    e.target.closest('li.grid__item').classList.add('selected')
  }

  const removeSelectedClass = (e) => {
    e.target.closest('li.grid__item').classList.remove('selected')
  }


  if (window.innerWidth > 749) {
    imgWrappers.forEach(item => {
      item.addEventListener('mouseenter', (e) => {
        addHeight(e)
        addSelectedClass(e)
      })
      item.addEventListener('mouseleave', (e) => {
        removeHeight(e)
        removeSelectedClass(e)
      })
    })
  }

  flickityBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (customerLogged) {
        updatePrice(e)
      }
      updateMainImg(e)
    })
  })

  addEventListener("resize", () => {
    productCardHeight = `${document.querySelector('.custom__product-card .product-card-img-wrapper > img').offsetHeight}px`
  });
}) 