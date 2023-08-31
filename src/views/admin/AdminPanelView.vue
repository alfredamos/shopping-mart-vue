<template>
  <div class="row mt-5">
    <div class="col col-sm-6 offset-3">
      <div class="card shadow-lg p-5 border-2 border-primary">
        <div class="card-body p-lg-5">
          <h1 class="text-primary">Admin Panel</h1>
          <table class="table table-striped table-bordered table-responsive">
            <thead>
              <tr>
                <th class="fw-bolder">Cart Items</th>
                <th class="fw-bolder">Categories</th>
                <th class="fw-bolder">Orders</th>
                <th class="fw-bolder">Products</th>
                <th class="fw-bolder">Users</th>                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/cart-items"
                    >List Cart Items &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/categories"
                    >List Categories &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/orders"
                    >List Orders &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/list-product"
                    >List Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-primary fw-bold" to="/users"
                    >List User &#10148;</RouterLink
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/orders/create"
                    >Create Cart Item &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/orders/create"
                    >Create Category &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/orders/create"
                    >Create Order &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/list-product/create"
                    >Create Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-secondary fw-bold" to="/users/create" exact
                    >Create User &#10148;</RouterLink
                  >
                </td>
              </tr>                            
              <tr>
                <td>
                  <RouterLink class="link-success fw-bold" to="/list-product"
                    >View Cart Item &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-success fw-bold" to="/list-product"
                    >View Category &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-success fw-bold" to="/list-product"
                    >View Order &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-success fw-bold" to="/list-product"
                    >View Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-success fw-bold" to="/users"
                    >View User &#10146;</RouterLink
                  >
                </td>
              </tr> 
              <tr>
                <td>
                  <RouterLink class="link-warning fw-bold" to="/list-product"
                    >Update Cart Item &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-warning fw-bold" to="/list-product"
                    >Update Category &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-warning fw-bold" to="/list-product"
                    >Update Order &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-warning fw-bold" to="/list-product"
                    >Update Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-warning fw-bold" to="/users"
                    >Update User &#10146;</RouterLink
                  >
                </td>
              </tr>             
              <tr>
                <td>
                  <RouterLink class="link-danger fw-bold" to="/list-product"
                    >Delete Cart Item &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-danger fw-bold" to="/list-product"
                    >Delete Category &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-danger fw-bold" to="/list-product"
                    >Delete Order &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-danger fw-bold" to="/list-product"
                    >Delete Product &#10148;</RouterLink
                  >
                </td>
                <td>
                  <RouterLink class="link-danger fw-bold" to="/users"
                    >Delete User &#10146;</RouterLink
                  >
                </td>
              </tr>                           
            </tbody>
          </table>
        </div>
        <div class="card-footer bg-transparent text-dark d-flex justify-content-center align-content-center border-top-0">
          <RouterLink class="btn btn-outline-secondary btn-lg w-90 fw-bold" to="/users">Change User Role</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
