export const applist = [
    {
        "id": "0oa9xjg94imsqEqbL5d7",
        "name": "saasure",
        "label": "Okta Admin Console",
        "status": "ACTIVE",
        "lastUpdated": "2023-06-12T15:31:30.000Z",
        "created": "2023-06-12T15:31:28.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": false,
                "web": false
            },
            "appLinks": {
                "admin": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg94imsqEqbL5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "admin",
                    "href": "https://dev-07110725.okta.com/home/saasure/0oa9xjg94imsqEqbL5d7/2",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg94imsqEqbL5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg94imsqEqbL5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/okta_admin_app.da3325676d57eaf566cb786dd0c7a819.png",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0bdWNNd1Bg5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg94imsqEqbL5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg94imsqEqbL5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oa9xjg98qrM5dcDs5d7",
        "name": "okta_browser_plugin",
        "label": "Okta Browser Plugin",
        "status": "ACTIVE",
        "lastUpdated": "2023-12-07T23:21:33.000Z",
        "created": "2023-06-12T15:31:33.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {}
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg98qrM5dcDs5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg98qrM5dcDs5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg98qrM5dcDs5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/okta-logo-browser-plugin.1db9f55776407dfc548a5d6985ff280a.svg",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0cqclanVrj5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg98qrM5dcDs5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg98qrM5dcDs5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oa9xjg99lBOMVUIj5d7",
        "name": "okta_enduser",
        "label": "Okta Dashboard",
        "status": "ACTIVE",
        "lastUpdated": "2023-12-14T19:54:32.000Z",
        "created": "2023-06-12T15:31:34.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": false,
                "web": false
            },
            "appLinks": {}
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg99lBOMVUIj5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg99lBOMVUIj5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg99lBOMVUIj5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/okta-logo-end-user-dashboard.fc6d8fdbcb8cb4c933d009e71456cec6.svg",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0cqclanVrj5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg99lBOMVUIj5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9xjg99lBOMVUIj5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oa9y7m6fwJJrFlTd5d7",
        "name": "oidc_client",
        "label": "Promos Red App",
        "status": "INACTIVE",
        "lastUpdated": "2023-06-19T20:18:09.000Z",
        "created": "2023-06-13T20:00:57.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": false
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oa9y7m6fwJJrFlTd5d7",
                "token_endpoint_auth_method": "none",
                "pkce_required": true
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": "https://ok12static.oktacdn.com/fs/bcg/4/gfs9y7nzplXIInlOR5d7",
                "redirect_uris": [
                    "http://localhost:8080/tokenCallback"
                ],
                "post_logout_redirect_uris": [
                    "http://localhost:8080"
                ],
                "response_types": [
                    "code"
                ],
                "grant_types": [
                    "authorization_code"
                ],
                "initiate_login_uri": "http://localhost:8080/retrieveTokensXHR",
                "application_type": "browser",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "idp_initiated_login": {
                    "mode": "SPEC",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9y7m6fwJJrFlTd5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oa9y7m6fwJJrFlTd5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "activate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9y7m6fwJJrFlTd5d7/lifecycle/activate"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9y7m6fwJJrFlTd5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9y7m6fwJJrFlTd5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/fs/bco/4/fs09y7i7ehmSy8GwM5d7",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9y7m6fwJJrFlTd5d7/users"
            }
        }
    },
    {
        "id": "0oa9zvh2p7Qs5UeP65d7",
        "name": "oidc_client",
        "label": "Promos UI Red",
        "status": "INACTIVE",
        "lastUpdated": "2023-07-12T20:19:08.000Z",
        "created": "2023-06-16T16:14:20.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oa9zvh2p7Qs5UeP65d7",
                "token_endpoint_auth_method": "none",
                "pkce_required": true
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "http://localhost:8080/redirect"
                ],
                "post_logout_redirect_uris": [
                    "http://localhost:8080"
                ],
                "response_types": [
                    "code"
                ],
                "grant_types": [
                    "authorization_code"
                ],
                "application_type": "browser",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9zvh2p7Qs5UeP65d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oa9zvh2p7Qs5UeP65d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "activate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9zvh2p7Qs5UeP65d7/lifecycle/activate"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9zvh2p7Qs5UeP65d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9zvh2p7Qs5UeP65d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oa9zvh2p7Qs5UeP65d7/users"
            }
        }
    },
    {
        "id": "0oaa12qxa78ZTygFZ5d7",
        "name": "oidc_client",
        "label": "Maintenance PoC",
        "status": "INACTIVE",
        "lastUpdated": "2023-07-12T20:34:29.000Z",
        "created": "2023-06-19T16:06:32.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaa12qxa78ZTygFZ5d7",
                "token_endpoint_auth_method": "client_secret_basic",
                "pkce_required": false
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [],
                "response_types": [
                    "token"
                ],
                "grant_types": [
                    "client_credentials"
                ],
                "application_type": "service",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa12qxa78ZTygFZ5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaa12qxa78ZTygFZ5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "activate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa12qxa78ZTygFZ5d7/lifecycle/activate"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa12qxa78ZTygFZ5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa12qxa78ZTygFZ5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "clientCredentials": [
                {
                    "name": "secrets",
                    "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa12qxa78ZTygFZ5d7/credentials/secrets"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa12qxa78ZTygFZ5d7/users"
            }
        }
    },
    {
        "id": "0oaa2ybi6odD9cIli5d7",
        "name": "oidc_client",
        "label": "OIDC Web App",
        "status": "ACTIVE",
        "lastUpdated": "2024-01-09T18:40:38.000Z",
        "created": "2023-06-22T16:08:13.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaa2ybi6odD9cIli5d7",
                "token_endpoint_auth_method": "client_secret_basic",
                "pkce_required": false
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "https://apitutor.okta.uno/oidc/redirect",
                    "https://oidcdebugger.com/debug",
                    "http://localhost:3000/oidc/redirect"
                ],
                "response_types": [
                    "token",
                    "id_token",
                    "code"
                ],
                "grant_types": [
                    "client_credentials",
                    "implicit",
                    "authorization_code",
                    "refresh_token",
                    "interaction_code"
                ],
                "application_type": "web",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "refresh_token": {
                    "rotation_type": "ROTATE",
                    "leeway": 30
                },
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa2ybi6odD9cIli5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaa2ybi6odD9cIli5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa2ybi6odD9cIli5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa2ybi6odD9cIli5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "clientCredentials": [
                {
                    "name": "secrets",
                    "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa2ybi6odD9cIli5d7/credentials/secrets"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa2ybi6odD9cIli5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa2ybi6odD9cIli5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oaa33rpxexudba0t5d7",
        "name": "oidc_client",
        "label": "OAuth App nombre largo aaaaaaaaaa que pasa con el responsive a ver jajajajajaja",
        "status": "INACTIVE",
        "lastUpdated": "2023-10-10T20:18:09.000Z",
        "created": "2023-06-22T20:25:38.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaa33rpxexudba0t5d7",
                "token_endpoint_auth_method": "client_secret_basic",
                "pkce_required": false
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [],
                "response_types": [
                    "token"
                ],
                "grant_types": [
                    "client_credentials"
                ],
                "application_type": "service",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa33rpxexudba0t5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaa33rpxexudba0t5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "activate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa33rpxexudba0t5d7/lifecycle/activate"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa33rpxexudba0t5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa33rpxexudba0t5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "clientCredentials": [
                {
                    "name": "secrets",
                    "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa33rpxexudba0t5d7/credentials/secrets"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaa33rpxexudba0t5d7/users"
            }
        }
    },
    {
        "id": "0oaaburwnogm0g10I5d7",
        "name": "oidc_client",
        "label": "OIDC SPA",
        "status": "ACTIVE",
        "lastUpdated": "2023-08-23T20:50:28.000Z",
        "created": "2023-07-11T17:30:04.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaaburwnogm0g10I5d7",
                "token_endpoint_auth_method": "none",
                "pkce_required": true
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "http://localhost:3000/oidc/redirect",
                    "https://oidcdebugger.com/debug",
                    "http://localhost:8080/login/callback"
                ],
                "post_logout_redirect_uris": [
                    "http://localhost:8080"
                ],
                "response_types": [
                    "code",
                    "id_token",
                    "token"
                ],
                "grant_types": [
                    "implicit",
                    "refresh_token",
                    "authorization_code",
                    "interaction_code"
                ],
                "application_type": "browser",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "refresh_token": {
                    "rotation_type": "ROTATE",
                    "leeway": 30
                },
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaburwnogm0g10I5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaaburwnogm0g10I5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaburwnogm0g10I5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaburwnogm0g10I5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaburwnogm0g10I5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaburwnogm0g10I5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oaaibqkakTxPpedw5d7",
        "name": "oidc_client",
        "label": "OIDC Web PKCE",
        "status": "ACTIVE",
        "lastUpdated": "2023-07-24T22:45:53.000Z",
        "created": "2023-07-24T22:15:54.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaaibqkakTxPpedw5d7",
                "token_endpoint_auth_method": "client_secret_basic",
                "pkce_required": true
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "http://localhost:3000/oidc/redirect"
                ],
                "post_logout_redirect_uris": [
                    "http://localhost:8080"
                ],
                "response_types": [
                    "code",
                    "token",
                    "id_token"
                ],
                "grant_types": [
                    "refresh_token",
                    "authorization_code",
                    "implicit",
                    "client_credentials"
                ],
                "application_type": "web",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "refresh_token": {
                    "rotation_type": "STATIC"
                },
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaibqkakTxPpedw5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaaibqkakTxPpedw5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaibqkakTxPpedw5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaibqkakTxPpedw5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "clientCredentials": [
                {
                    "name": "secrets",
                    "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaibqkakTxPpedw5d7/credentials/secrets"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaibqkakTxPpedw5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaaibqkakTxPpedw5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oaay3o8xdKEIkVUC5d7",
        "name": "oidc_client",
        "label": "My SPA",
        "status": "INACTIVE",
        "lastUpdated": "2023-08-24T18:10:27.000Z",
        "created": "2023-08-23T20:55:20.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaay3o8xdKEIkVUC5d7",
                "token_endpoint_auth_method": "none",
                "pkce_required": true
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "http://localhost:8080/login/callback"
                ],
                "post_logout_redirect_uris": [
                    "http://localhost:8080"
                ],
                "response_types": [
                    "id_token",
                    "token",
                    "code"
                ],
                "grant_types": [
                    "authorization_code",
                    "interaction_code",
                    "refresh_token",
                    "implicit"
                ],
                "application_type": "browser",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "refresh_token": {
                    "rotation_type": "ROTATE",
                    "leeway": 30
                },
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaay3o8xdKEIkVUC5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaay3o8xdKEIkVUC5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "activate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaay3o8xdKEIkVUC5d7/lifecycle/activate"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaay3o8xdKEIkVUC5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaay3o8xdKEIkVUC5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0ddHAfsxv95d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaay3o8xdKEIkVUC5d7/users"
            }
        }
    },
    {
        "id": "0oaayn6velvVDT2kF5d7",
        "name": "oidc_client",
        "label": "Attestation App",
        "status": "ACTIVE",
        "lastUpdated": "2023-08-24T18:11:24.000Z",
        "created": "2023-08-24T18:11:24.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaayn6velvVDT2kF5d7",
                "token_endpoint_auth_method": "none",
                "pkce_required": true
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "http://localhost:5173/login/callback"
                ],
                "post_logout_redirect_uris": [
                    "http://localhost:5173"
                ],
                "response_types": [
                    "id_token",
                    "token",
                    "code"
                ],
                "grant_types": [
                    "authorization_code",
                    "interaction_code",
                    "refresh_token",
                    "implicit"
                ],
                "application_type": "browser",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "refresh_token": {
                    "rotation_type": "ROTATE",
                    "leeway": 30
                },
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaayn6velvVDT2kF5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaayn6velvVDT2kF5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaayn6velvVDT2kF5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaayn6velvVDT2kF5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaayn6velvVDT2kF5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaayn6velvVDT2kF5d7/lifecycle/deactivate"
            }
        }
    },
    {
        "id": "0oacn6sk332bUjZHu5d7",
        "name": "dev-07110725_engapp_1",
        "label": "Engapp",
        "status": "INACTIVE",
        "lastUpdated": "2024-01-09T19:23:27.000Z",
        "created": "2023-10-10T20:21:37.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": false,
                "web": false
            },
            "appLinks": {
                "dev-07110725_engapp_1_link": true
            }
        },
        "features": [],
        "signOnMode": "SAML_2_0",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "DbESzDuL85ZAxgvQrl9K-l3Bnr6qa1sdYbCm7mRKc9I"
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "signOn": {
                "signOnMode": "SAML_2_0",
                "defaultRelayState": "",
                "ssoAcsUrl": "https://dev-18177593.okta.com/sso/saml2/0oacn7abi0WaVKcs95d7",
                "idpIssuer": "http://www.okta.com/exkcn6sk31J3SLxCu5d7",
                "audience": "https://www.okta.com/saml2/service-provider/spxmyjgtqiaeiathfmfq",
                "recipient": "https://dev-18177593.okta.com/sso/saml2/0oacn7abi0WaVKcs95d7",
                "destination": "https://dev-18177593.okta.com/sso/saml2/0oacn7abi0WaVKcs95d7",
                "subjectNameIdTemplate": "${user.userName}",
                "subjectNameIdFormat": "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
                "responseSigned": true,
                "assertionSigned": true,
                "signatureAlgorithm": "RSA_SHA256",
                "digestAlgorithm": "SHA256",
                "honorForceAuthn": true,
                "authnContextClassRef": "urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport",
                "spIssuer": null,
                "requestCompressed": false,
                "attributeStatements": [
                    {
                        "type": "EXPRESSION",
                        "name": "FirstName",
                        "namespace": "urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified",
                        "values": [
                            "user.firstName"
                        ]
                    },
                    {
                        "type": "EXPRESSION",
                        "name": "LastName",
                        "namespace": "urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified",
                        "values": [
                            "user.lastName"
                        ]
                    },
                    {
                        "type": "EXPRESSION",
                        "name": "Email",
                        "namespace": "urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified",
                        "values": [
                            "user.email"
                        ]
                    },
                    {
                        "type": "EXPRESSION",
                        "name": "empName",
                        "namespace": "urn:oasis:names:tc:SAML:2.0:attrname-format:unspecified",
                        "values": [
                            "user.lastName+\".\"+user.firstName"
                        ]
                    }
                ],
                "inlineHooks": [],
                "allowMultipleAcsEndpoints": false,
                "acsEndpoints": [],
                "samlSignedRequestEnabled": false,
                "slo": {
                    "enabled": false
                }
            }
        },
        "_links": {
            "help": {
                "href": "https://dev-07110725-admin.okta.com/app/dev-07110725_engapp_1/0oacn6sk332bUjZHu5d7/setup/help/SAML_2_0/instructions",
                "type": "text/html"
            },
            "metadata": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oacn6sk332bUjZHu5d7/sso/saml/metadata",
                "type": "application/xml"
            },
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oacn6sk332bUjZHu5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "dev-07110725_engapp_1_link",
                    "href": "https://dev-07110725.okta.com/home/dev-07110725_engapp_1/0oacn6sk332bUjZHu5d7/alncn6waosjHEG9As5d7",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "activate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oacn6sk332bUjZHu5d7/lifecycle/activate"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oacn6sk332bUjZHu5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oacn6sk332bUjZHu5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/fs/bcg/4/gfscn6kdla3wgUOU45d7",
                    "type": "image/png"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oacn6sk332bUjZHu5d7/users"
            }
        }
    },
    {
        "id": "0oaed9204pP4qNvWM5d7",
        "name": "oidc_client",
        "label": "My Native App",
        "status": "ACTIVE",
        "lastUpdated": "2024-01-09T19:24:56.000Z",
        "created": "2024-01-09T19:24:01.000Z",
        "accessibility": {
            "selfService": false,
            "errorRedirectUrl": null,
            "loginRedirectUrl": null
        },
        "visibility": {
            "autoLaunch": false,
            "autoSubmitToolbar": false,
            "hide": {
                "iOS": true,
                "web": true
            },
            "appLinks": {
                "oidc_client_link": true
            }
        },
        "features": [],
        "signOnMode": "OPENID_CONNECT",
        "credentials": {
            "userNameTemplate": {
                "template": "${source.login}",
                "type": "BUILT_IN"
            },
            "signing": {
                "kid": "BbM2bO9BEuKNfyeLyXIBLrt-IsoMGJdBc3q3j41qupI"
            },
            "oauthClient": {
                "autoKeyRotation": true,
                "client_id": "0oaed9204pP4qNvWM5d7",
                "token_endpoint_auth_method": "client_secret_basic",
                "pkce_required": false
            }
        },
        "settings": {
            "app": {},
            "notifications": {
                "vpn": {
                    "network": {
                        "connection": "DISABLED"
                    },
                    "message": null,
                    "helpUrl": null
                }
            },
            "manualProvisioning": false,
            "implicitAssignment": false,
            "notes": {
                "admin": null,
                "enduser": null
            },
            "oauthClient": {
                "client_uri": null,
                "logo_uri": null,
                "redirect_uris": [
                    "com.okta.dev-07110725:/callback"
                ],
                "post_logout_redirect_uris": [
                    "com.okta.dev-07110725:/"
                ],
                "response_types": [
                    "id_token",
                    "token",
                    "code"
                ],
                "grant_types": [
                    "authorization_code",
                    "refresh_token",
                    "password",
                    "urn:ietf:params:oauth:grant-type:token-exchange",
                    "implicit"
                ],
                "application_type": "native",
                "consent_method": "REQUIRED",
                "issuer_mode": "DYNAMIC",
                "refresh_token": {
                    "rotation_type": "STATIC"
                },
                "idp_initiated_login": {
                    "mode": "DISABLED",
                    "default_scope": []
                },
                "wildcard_redirect": "DISABLED",
                "dpop_bound_access_tokens": false
            }
        },
        "_links": {
            "uploadLogo": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaed9204pP4qNvWM5d7/logo",
                "hints": {
                    "allow": [
                        "POST"
                    ]
                }
            },
            "appLinks": [
                {
                    "name": "oidc_client_link",
                    "href": "https://dev-07110725.okta.com/home/oidc_client/0oaed9204pP4qNvWM5d7/aln177a159h7Zf52X0g8",
                    "type": "text/html"
                }
            ],
            "profileEnrollment": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0csUEYhGBy5d7"
            },
            "policies": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaed9204pP4qNvWM5d7/policies",
                "hints": {
                    "allow": [
                        "PUT"
                    ]
                }
            },
            "groups": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaed9204pP4qNvWM5d7/groups"
            },
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
                    "type": "image/png"
                }
            ],
            "clientCredentials": [
                {
                    "name": "secrets",
                    "href": "https://dev-07110725.okta.com/api/v1/apps/0oaed9204pP4qNvWM5d7/credentials/secrets"
                }
            ],
            "accessPolicy": {
                "href": "https://dev-07110725.okta.com/api/v1/policies/rst9xkq0coeEusqcl5d7"
            },
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaed9204pP4qNvWM5d7/users"
            },
            "deactivate": {
                "href": "https://dev-07110725.okta.com/api/v1/apps/0oaed9204pP4qNvWM5d7/lifecycle/deactivate"
            }
        }
    }
]

export const grouplist = [
    {
        "id": "00g9xjg94wtEvKbAd5d7",
        "created": "2023-06-12T15:31:28.000Z",
        "lastUpdated": "2023-06-12T15:31:28.000Z",
        "lastMembershipUpdated": "2024-01-11T18:50:15.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "BUILT_IN",
        "profile": {
            "name": "Everyone",
            "description": "All users in your organization"
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00g9xjg94wtEvKbAd5d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00g9xjg94wtEvKbAd5d7/apps"
            }
        }
    },
    {
        "id": "00ga20dd2rAL6qf155d7",
        "created": "2023-06-20T20:47:53.000Z",
        "lastUpdated": "2023-06-20T20:47:53.000Z",
        "lastMembershipUpdated": "2023-10-02T21:11:22.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "OKTA_GROUP",
        "profile": {
            "name": "Generated 1",
            "description": "random people imported using a generated CSV"
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga20dd2rAL6qf155d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga20dd2rAL6qf155d7/apps"
            }
        }
    },
    {
        "id": "00ga2znh9jvrM3VCK5d7",
        "created": "2023-06-22T17:18:53.000Z",
        "lastUpdated": "2023-06-22T17:18:53.000Z",
        "lastMembershipUpdated": "2023-10-02T20:27:02.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "OKTA_GROUP",
        "profile": {
            "name": "Marketing",
            "description": "Marketing Marketing"
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga2znh9jvrM3VCK5d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga2znh9jvrM3VCK5d7/apps"
            }
        }
    },
    {
        "id": "00g9xjg973rJQ4rP85d7",
        "created": "2023-06-12T15:31:30.000Z",
        "lastUpdated": "2023-06-12T15:31:30.000Z",
        "lastMembershipUpdated": "2023-06-12T15:31:30.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "BUILT_IN",
        "profile": {
            "name": "Okta Administrators",
            "description": "Okta manages this group, which contains all administrators in your organization."
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00g9xjg973rJQ4rP85d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00g9xjg973rJQ4rP85d7/apps"
            }
        }
    },
    {
        "id": "00ga1999we3sPglYK5d7",
        "created": "2023-06-19T20:29:57.000Z",
        "lastUpdated": "2023-06-19T20:29:57.000Z",
        "lastMembershipUpdated": "2023-06-19T20:39:32.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "OKTA_GROUP",
        "profile": {
            "name": "Promos Admins",
            "description": null
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga1999we3sPglYK5d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga1999we3sPglYK5d7/apps"
            }
        }
    },
    {
        "id": "00ga19b6i0DEv2uxo5d7",
        "created": "2023-06-19T20:29:49.000Z",
        "lastUpdated": "2023-06-19T20:29:49.000Z",
        "lastMembershipUpdated": "2023-06-19T20:39:12.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "OKTA_GROUP",
        "profile": {
            "name": "Promos Users",
            "description": ""
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga19b6i0DEv2uxo5d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga19b6i0DEv2uxo5d7/apps"
            }
        }
    },
    {
        "id": "00ga2zopo1PrmI9Vy5d7",
        "created": "2023-06-22T17:18:17.000Z",
        "lastUpdated": "2023-06-22T17:18:17.000Z",
        "lastMembershipUpdated": "2023-10-02T20:27:02.000Z",
        "objectClass": [
            "okta:user_group"
        ],
        "type": "OKTA_GROUP",
        "profile": {
            "name": "Security",
            "description": "Secure Department"
        },
        "_links": {
            "logo": [
                {
                    "name": "medium",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-medium.30ce6d4085dff29412984e4c191bc874.png",
                    "type": "image/png"
                },
                {
                    "name": "large",
                    "href": "https://ok12static.oktacdn.com/assets/img/logos/groups/odyssey/okta-large.c3cb8cda8ae0add1b4fe928f5844dbe3.png",
                    "type": "image/png"
                }
            ],
            "users": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga2zopo1PrmI9Vy5d7/users"
            },
            "apps": {
                "href": "https://dev-07110725.okta.com/api/v1/groups/00ga2zopo1PrmI9Vy5d7/apps"
            }
        }
    }
]