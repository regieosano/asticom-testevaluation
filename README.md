# APIs for Claudi.JS Deployment which can also be tested locally

# GET ALL CUSTOMERS

(GET) http://localhost:5555/api-test/claudia/customers

# GET SPECIFIC CUSTOMER (based on ID (c1, c2...))

(GET) http://localhost:5555/api-test/claudia/customers/{id}

# POST A CUSTOMER

(POST) http://localhost:5555/api-test/claudia/customers

# JSON Body - {

    "id": "c9",
    "name": "Abdul Jabbar",
    "address": "Pasay QC"

}

# UPDATE A CUSTOMER (based on ID (c1, c2...))

(PUT) http://localhost:5555/api-test/claudia/customers/{id}

# JSON Body - {

    "id": "c5",
    "name": "Mike Sample",
    "address": "Pasay QC"

}

# DELETE A CUSTOMER (based on ID (c1, c2...))

(DELETE) http://localhost:5555/api-test/claudia/customers/{id}
