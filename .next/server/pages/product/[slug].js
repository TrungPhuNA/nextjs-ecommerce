"use strict";
(() => {
var exports = {};
exports.id = 915;
exports.ids = [915,867,141,236,978,656];
exports.modules = {

/***/ 2980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const ApiMicroService = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: process.env.URL_API,
    responseType: 'json'
});
ApiMicroService.defaults.headers.post['Content-Type'] = 'application/json';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiMicroService);


/***/ }),

/***/ 9371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/layouts/Master.js
var Master = __webpack_require__(6420);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: ./pages/components/ItemProduct.js
var ItemProduct = __webpack_require__(5314);
// EXTERNAL MODULE: ./pages/components/ItemLoadingProduct.js
var ItemLoadingProduct = __webpack_require__(5078);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./pages/api/api-service.js
var api_service = __webpack_require__(2980);
;// CONCATENATED MODULE: ./pages/product/[slug].js










function ProductDetail({ productsNew , productDetail  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const slug = router.query.slug;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Master["default"], {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: productDetail.pro_title_seo
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "breadcrumb mt-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        itemProp: "url",
                                        title: "Home",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            itemProp: "title",
                                            children: "Trang chủ"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/product",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        itemProp: "url",
                                        title: "Sản phẩm",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            itemProp: "title",
                                            children: "Sản phẩm"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    itemProp: "title",
                                    children: "C"
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "product-detail mt-3 bg-white d-flex",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "thumb d-flex",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "left d-flex flex-md-column",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/sp1.jpeg",
                                                alt: "SP 1"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/sp2.jpeg",
                                                alt: "Sp 2"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "mb-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/sp3.jpeg",
                                                alt: "SP 3"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "right",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/sp3.jpeg",
                                            alt: "SP 3"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "info mt-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Đồ \xe1n website chương tr\xecnh giảm gi\xe1 bằng laravel - Đồ \xe1n tốt nghiệp"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: "item-start",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-star"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-star"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    className: "active",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-star"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-star"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    className: "",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                        className: "fa fa-star"
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "item-pay",
                                            children: "Đ\xe3 b\xe1n 20"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "d-flex box-information-shop",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "information",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "box-price",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "price",
                                                        children: "20.000.000 đ"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "box-qty",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                            className: "label",
                                                            children: "Số Lượng"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "group-input",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg",
                                                                        alt: "icon"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "text",
                                                                    className: "input"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                        src: "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg",
                                                                        alt: "icon"
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "shop",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "shop-box",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "overview d-flex align-items-center ",
                                                            href: "https://tiki.vn/cua-hang/hangshoes",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    src: "https://vcdn.tikicdn.com/cache/w100/ts/seller/4b/54/1a/f385a79a716cb3505f152e7af8c769aa.png",
                                                                    alt: "icon"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "seller-name",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        children: "Hăngshoes"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "seller-detail d-flex",
                                                            style: {
                                                                minHeight: "40px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "item review ",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                            className: "title",
                                                                            children: [
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "3.7 / 5"
                                                                                }),
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                    className: "fa fa-star"
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "sub-title",
                                                                            children: "274 đ\xe1nh gi\xe1"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "border-left"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "item normal",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "title",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "40"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "sub-title",
                                                                            children: "Theo d\xf5i"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "border-left"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "item chat",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "title",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                children: "72%"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "sub-title",
                                                                            children: "Phản hồi"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "seller-action ",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    className: "action",
                                                                    "data-view-id": "pdp_store_seller.view",
                                                                    href: "https://tiki.vn/cua-hang/hangshoes",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "https://salt.tikicdn.com/ts/upload/49/27/ff/d735c33edfdc6cf6aeb6e183bec28869.png",
                                                                            alt: "icon"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Xem Shop"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    "data-view-id": "pdp_store_seller.follow",
                                                                    className: "action follow",
                                                                    "data-view-label": "101161",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                            src: "https://salt.tikicdn.com/ts/upload/5b/bf/3c/eeda00767e26b5873030e44f951441c4.png",
                                                                            alt: "icon"
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            children: "Theo D\xf5i"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section bg-white mt-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "heading",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "M\xf4 tả sản phẩm"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content section-content",
                            dangerouslySetInnerHTML: {
                                __html: productDetail.pro_content
                            }
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Container, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "section bg-white mt-3",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "heading",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "D\xe0nh ri\xeang cho bạn"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "content",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "lists",
                                children: productsNew.length > 0 ? productsNew.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ItemProduct["default"], {
                                        item: item,
                                        classStyle: "lists-item lists-item-6"
                                    }, index)
                                ) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lists wrapper-cell",
                                    children: countLoading.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(ItemLoadingProduct["default"], {
                                        }, index)
                                    )
                                })
                            })
                        })
                    ]
                })
            })
        ]
    }));
}
const getStaticPaths = async ()=>{
    const responseProducts = await external_axios_default().get(`https://cms.123code.net/api/products?limit=12`);
    const productsNew = responseProducts.data.data.products;
    const paths = productsNew.map((pro)=>({
            params: {
                slug: pro.slug
            }
        })
    );
    return {
        paths,
        fallback: false
    };
};
async function getStaticProps({ params  }) {
    const responseProducts = await api_service/* default.get */.Z.get(`/api/products?limit=12`);
    const productsNew = responseProducts.data.data.products;
    const slug = params.slug;
    const responseProductDetail = await api_service/* default.get */.Z.get(`/api/products/${slug}`);
    const productDetail = responseProductDetail.data.data.product;
    return {
        props: {
            productsNew,
            productDetail
        }
    };
}
/* harmony default export */ const _slug_ = (ProductDetail);


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,168,420,314,78], () => (__webpack_exec__(9371)));
module.exports = __webpack_exports__;

})();