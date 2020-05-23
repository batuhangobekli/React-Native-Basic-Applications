//
//  User.swift
//  BiTabak-IOS
//
//  Created by Batuhan Göbekli on 14.04.2018.
//  Copyright © 2018 Batuhan Göbekli. All rights reserved.

import Foundation
import ObjectMapper

class AuthResponse:Mappable {
    var user: SimpleUser? = nil
    var token: String?
    
    required init?(map: Map) {
       
    }
    func mapping(map:Map){
        user <- map["user"]
        token <- map["token"]
    }
}

