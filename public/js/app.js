// Todo List CRUD dengan LocalStorage
// Gaya Glassmorphism

let todos = [];

// Load data dari localStorage atau gunakan data dummy jika kosong
function loadTodos() {
    const stored = localStorage.getItem('glassmorphism_todos');
    if (stored) {
        todos = JSON.parse(stored);
    } else {
        // Data dummy
        todos = [
            {
                id: 1,
                title: 'Belajar Symfony 5.4',
                description: 'Pelajari routing, controller, dan template',
                completed: false,
                priority: 'high',
                due_date: '2026-11-05'
            },
            {
                id: 2,
                title: 'Buat UI Glassmorphism',
                description: 'Desain todo list dengan efek blur dan transparansi',
                completed: true,
                priority: 'medium',
                due_date: '2026-11-02'
            },
            {
                id: 3,
                title: 'Push ke GitHub',
                description: 'Commit dan push project ke repository',
                completed: false,
                priority: 'low',
                due_date: '2026-11-07'
            },
            {
                id: 4,
                title: 'Belajar Twig',
                description: 'Mengenal templating engine Symfony',
                completed: false,
                priority: 'high',
                due_date: '2026-11-06'
            },
            {
                id: 5,
                title: 'Baca dokumentasi CSS backdrop-filter',
                description: 'Pahami cara kerja efek glassmorphism',
                completed: true,
                priority: 'medium',
                due_date: '2026-11-01'
            }
        ];
        saveTodos();
    }
    renderTodos();
}

// Simpan ke localStorage
function saveTodos() {
    localStorage.setItem('glassmorphism_todos', JSON.stringify(todos));
}

// Render semua todos
function renderTodos() {
    const grid = document.getElementById('todoGrid');
    grid.innerHTML = '';

    // Update statistik
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-completed').textContent = completed;
    document.getElementById('stat-pending').textContent = pending;

    if (todos.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">??</div>
                <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">Belum ada tugas</h3>
                <p>Tambahkan tugas pertamamu di atas!</p>
            </div>
        `;
        return;
    }

    todos.forEach(todo => {
        const card = document.createElement('article');
        card.className = `todo-card ${todo.completed ? 'completed' : ''}`;
        card.innerHTML = `
            <div class="todo-header">
                <div class="todo-checkbox">
                    <input type="checkbox" id="todo-${todo.id}" ${todo.completed ? 'checked' : ''} onchange="toggleComplete(${todo.id})">
                    <label for="todo-${todo.id}"></label>
                </div>
                <div class="todo-priority priority-${todo.priority}">
                    ${todo.priority === 'high' ? '?? Tinggi' : todo.priority === 'medium' ? '? Sedang' : '?? Rendah'}
                </div>
            </div>
            <h2 class="todo-title">${escapeHtml(todo.title)}</h2>
            <p class="todo-desc">${escapeHtml(todo.description)}</p>
            <footer class="todo-footer">
                <div class="todo-date">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${todo.due_date}</span>
                </div>
                <span class="todo-status">
                    ${todo.completed ? '? Selesai' : '? Dalam Proses'}
                </span>
            </footer>
            <div class="todo-actions">
                <button class="action-btn btn-edit" onclick="openEditModal(${todo.id})">?? Edit</button>
                <button class="action-btn btn-delete" onclick="deleteTodo(${todo.id})">??? Hapus</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Tambah todo baru
document.getElementById('addForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const due_date = document.getElementById('due_date').value;
    
    const newTodo = {
        id: Date.now(),
        title,
        description,
        completed: false,
        priority,
        due_date
    };
    
    todos.unshift(newTodo);
    saveTodos();
    renderTodos();
    
    this.reset();
    
    // Set tanggal hari ini sebagai default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('due_date').value = today;
});

// Toggle selesai/belum
function toggleComplete(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

// Hapus todo
function deleteTodo(id) {
    if (confirm('Yakin ingin menghapus tugas ini?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
    }
}

// Buka modal edit
function openEditModal(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        document.getElementById('editId').value = todo.id;
        document.getElementById('editTitle').value = todo.title;
        document.getElementById('editDescription').value = todo.description;
        document.getElementById('editPriority').value = todo.priority;
        document.getElementById('editDueDate').value = todo.due_date;
        
        document.getElementById('editModal').classList.add('active');
    }
}

// Tutup modal edit
function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
}

// Simpan edit
document.getElementById('editForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = parseInt(document.getElementById('editId').value);
    const todo = todos.find(t => t.id === id);
    
    if (todo) {
        todo.title = document.getElementById('editTitle').value;
        todo.description = document.getElementById('editDescription').value;
        todo.priority = document.getElementById('editPriority').value;
        todo.due_date = document.getElementById('editDueDate').value;
        
        saveTodos();
        renderTodos();
        closeEditModal();
    }
});

// Escape HTML untuk mencegah XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Set tanggal default ke hari ini
window.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('due_date').value = today;
    loadTodos();
});

// Tutup modal jika klik di luar
document.getElementById('editModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeEditModal();
    }
});
