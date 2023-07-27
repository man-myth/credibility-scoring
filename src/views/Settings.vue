<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col s12">
                    <h4>Account Information</h4>

                    <p>
                        <label>First Name:</label><br />
                        <input type="text" v-model="firstName" />
                    </p>
                    <p>
                        <label>Last Name:</label><br />
                        <input type="text" v-model="lastName" />
                    </p>
                    <p>
                        <label>Email:</label><br />
                        <input type="email" v-model="email" />
                    </p>
                    <p>
                        <label>Password:</label><br />
                        <input type="password" v-model="password" />
                    </p>
                    <p>
                        <label>Confirm Password:</label><br />
                        <input type="password" v-model="confirmPassword" />
                    </p>
                    <!-- User Preferences -->
                    <h4>User Preferences</h4>
                    <!-- Language select -->
                    <p>
                        <label>Language:</label><br />
                        <select v-model="language">
                            <option value="" disabled selected>Select a language</option>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                            <!-- Add more languages here -->
                        </select>

                    </p>

                    <!-- Theme select -->
                    <p>
                        <label>Theme:</label><br />
                        <select v-model="theme">
                            <option value="" disabled selected>Select a theme</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <!-- Add more themes here -->
                        </select>

                    </p>


                </div>

            </div>
            <!-- Submit button -->
            <button class="btn waves-effect waves-light" type="submit" name="action">Save Changes
                <i class="material-icons right">send</i></button>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'johndoe@example.com',
            password: '',
            confirmPassword: '',
            language: '',
            theme: ''
        }
    },
    mounted() {
        // Initialize the selects
        const selects = document.querySelectorAll('select');
        M.FormSelect.init(selects);
    }
}

</script>

<style scoped>
select {
    display: block;
}
.btn{
    
    margin: 2rem
}
</style>

