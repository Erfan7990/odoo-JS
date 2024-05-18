# -*- coding: utf-8 -*-
# from odoo import http


# class OwlJs(http.Controller):
#     @http.route('/owl_js/owl_js', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/owl_js/owl_js/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('owl_js.listing', {
#             'root': '/owl_js/owl_js',
#             'objects': http.request.env['owl_js.owl_js'].search([]),
#         })

#     @http.route('/owl_js/owl_js/objects/<model("owl_js.owl_js"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('owl_js.object', {
#             'object': obj
#         })
