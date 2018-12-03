import Vue from 'vue'
import swal from 'sweetalert2/dist/sweetalert2.min.js'
import 'sweetalert2/dist/sweetalert2.min.css'

function isBrowser() {
    return typeof window !== 'undefined'
}

var VueSweetalert2 = function() {}

VueSweetalert2.install = function(Vue, options) {
    // 1. adding a global method or property
    var _swal = isBrowser() ? swal.mixin(options) : function() { return Promise.resolve(); };

    Vue.swal = _swal

    // 4. add the instance method
    if (!Vue.prototype.hasOwnProperty('$swal')) {
        Object.defineProperty(Vue.prototype, '$swal', {
            get: function get() {
                return _swal
            }
        })
    }
}

Vue.use(VueSweetalert2, <%= JSON.stringify(options, null, 2) %>)