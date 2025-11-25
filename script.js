// // Only run tab functionality if tabs exist on the page
// document.addEventListener('DOMContentLoaded', function() {
//     const tabs = document.querySelectorAll(".tab");
//     const products = document.querySelectorAll(".product-card");

//     // Only initialize if tabs exist (not on shopping cart page)
//     if (tabs.length > 0 && products.length > 0) {
//         tabs.forEach((tab) => {
//             tab.addEventListener("click", () => {
//                 tabs.forEach((t) => t.classList.remove("active"));
//                 tab.classList.add("active");

//                 const category = tab.getAttribute("data-category");

//                 products.forEach((product) => {
//                     product.classList.remove("active");
//                     if (product.getAttribute("data-category") === category) {
//                         product.classList.add("active");
//                     }
//                 });
//             });
//         });

//         // Show default tab
//         const defaultTab = document.querySelector(".tab.active");
//         if (defaultTab) {
//             defaultTab.click();
//         }
//     }
// });

// const mobileToggle = document.getElementById("mobileToggle");
// const navMenu = document.getElementById("navMenu");

// mobileToggle.addEventListener("click", function () {
//   mobileToggle.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// // Close mobile menu when clicking on a link
// const navLinks = document.querySelectorAll(".nav-link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     if (window.innerWidth <= 768) {
//       mobileToggle.classList.remove("active");
//       navMenu.classList.remove("active");
//     }
//   });
// });

// // Close mobile menu when clicking outside
// document.addEventListener("click", function (event) {
//   const isClickInsideNav =
//     navMenu.contains(event.target) || mobileToggle.contains(event.target);
//   if (!isClickInsideNav && navMenu.classList.contains("active")) {
//     mobileToggle.classList.remove("active");
//     navMenu.classList.remove("active");
//   }
// });

// const tabs = document.querySelectorAll(".tab");
// const products = document.querySelectorAll(".product-card");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     // Remove active from all tabs
//     tabs.forEach((t) => t.classList.remove("active"));
//     tab.classList.add("active");

//     const category = tab.getAttribute("data-category");

//     // Show only matching products
//     products.forEach((product) => {
//       product.classList.remove("active");
//       if (product.getAttribute("data-category") === category) {
//         product.classList.add("active");
//       }
//     });
//   });
// });

// // By default show Bestseller products
// document.querySelector(".tab.active").click();

// // Scroll to top button functionality
// const scrollTopBtn = document.getElementById("scrollTop");

// // Show/hide button based on scroll position
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 300) {
//     scrollTopBtn.classList.add("show");
//   } else {
//     scrollTopBtn.classList.remove("show");
//   }
// });

// // Smooth scroll to top when clicked
// scrollTopBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// // Optional: Add some debug info
// window.addEventListener("scroll", function () {
//   console.log("Scroll position:", window.scrollY);
// });

// Only run tab functionality if tabs exist on the page
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll(".tab");
    const products = document.querySelectorAll(".product-card");

    // Only initialize if tabs exist (not on shopping cart page)
    if (tabs.length > 0 && products.length > 0) {
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                tabs.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");

                const category = tab.getAttribute("data-category");

                products.forEach((product) => {
                    product.classList.remove("active");
                    if (product.getAttribute("data-category") === category) {
                        product.classList.add("active");
                    }
                });
            });
        });

        // Show default tab - ONLY if tabs exist
        const defaultTab = document.querySelector(".tab.active");
        if (defaultTab) {
            defaultTab.click();
        }
    }
});

const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", function () {
  mobileToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      mobileToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideNav =
    navMenu.contains(event.target) || mobileToggle.contains(event.target);
  if (!isClickInsideNav && navMenu.classList.contains("active")) {
    mobileToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// REMOVED DUPLICATE CODE - This was causing the error!
// The tab functionality is already handled in DOMContentLoaded above

// Scroll to top button functionality
const scrollTopBtn = document.getElementById("scrollTop");

// Show/hide button based on scroll position
if (scrollTopBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top when clicked
  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
