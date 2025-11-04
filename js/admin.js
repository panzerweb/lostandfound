// Interactivity of Sweet Alerts for different Admin actions

// Approve or Reject function
export function approveOrReject(icon, message, bgColor){
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        background: `${bgColor}`,
        color: '#ffffff',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: `${icon}`,
        title: `${message}`,
    });
}

export function viewItem(itemData) {
  Swal.fire({
    title: 'View Item',
    html: `
        <form id="view-item-form" class="swal-form">
            <div class="form-grid">
            <div class="form-group">
                <label>ID:</label>
                <input type="text" class="swal2-input" value="${itemData.id}" disabled>
            </div>
            <div class="form-group">
                <label>Item Name:</label>
                <input type="text" class="swal2-input" value="${itemData.name}" disabled>
            </div>
            <div class="form-group">
                <label>Category:</label>
                <input type="text" class="swal2-input" value="${itemData.category}" disabled>
            </div>
            <div class="form-group">
                <label>Status:</label>
                <input type="text" class="swal2-input" value="${itemData.status}" disabled>
            </div>
            <div class="form-group">
                <label>Location:</label>
                <input type="text" class="swal2-input" value="${itemData.location}" disabled>
            </div>
            <div class="form-group">
                <label>Date:</label>
                <input type="text" class="swal2-input" value="${itemData.date}" disabled>
            </div>
            </div>
        </form>
    `,
    confirmButtonText: 'Close',
    width: '50em',
    grow: 'fullscreen',
    showCancelButton: false,
    focusConfirm: false,
    customClass: {
      popup: 'swal2-view-popup'
    }
  });
}


export function deleteItem(icon, message, bgColor){
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                background: `${bgColor}`,
                color: '#ffffff',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: `${icon}`,
                title: `${message}`,
            });
        }
    });
}


export function viewUser(userData) {
  Swal.fire({
    title: 'View Item',
    html: `
        <form id="view-item-form" class="swal-form">
            <div class="form-grid">
            <div class="form-group">
                <label>ID:</label>
                <input type="text" class="swal2-input" value="${userData.id}" disabled>
            </div>
            <div class="form-group">
                <label>Item Name:</label>
                <input type="text" class="swal2-input" value="${userData.name}" disabled>
            </div>
            <div class="form-group">
                <label>Category:</label>
                <input type="email" class="swal2-input" value="${userData.email}" disabled>
            </div>
            <div class="form-group">
                <label>Status:</label>
                <input type="text" class="swal2-input" value="${userData.admin_id}" disabled>
            </div>
            <div class="form-group">
                <label>Location:</label>
                <input type="text" class="swal2-input" value="${userData.role}" disabled>
            </div>
            </div>
        </form>
    `,
    confirmButtonText: 'Close',
    width: '50em',
    grow: 'fullscreen',
    showCancelButton: false,
    focusConfirm: false,
    customClass: {
      popup: 'swal2-view-popup'
    }
  });
}

export function addAsAdmin(userData){
    Swal.fire({
        title: "Admin Added!",
        text: `${userData.name} is added as an admin!`,
        icon: "succes"
    });
}