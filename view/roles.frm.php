<?php include_once "header.php"; ?>
<div class="row">
    <h1 class="text-center">Formulario de roles</h1>
    <div class="col-3 d-flex justify-content-end aling">
        <span class="fw-bolder">Nombre rol:</span>
    </div>
    <div class="col-6">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="txtRol" placeholder="name@example.com">
            <label for="floatingInput">Nombre roles</label>
        </div>
        <div class="col-3 align-self-center">
            <a onclick="create()" class="btn btn-primary">Crear</a>
        </div>
    </div>
</div>
</div>
<div class="row mt-5 bg-darx">
    <h1>TABLA DE ROLES</h1>
    <div class="col-8">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Opciones</th>
                </tr>
            </thead>
            <tbody id="tableBodyRol">
                
            </tbody>
        </table>
    </div>
</div>
<script src="../view/assets/js/rol.js"></script>
<?php include_once "footer.php"; ?>