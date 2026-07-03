import { Footer } from './Footer.js';

export function AdminDashboard() {
  const token = sessionStorage.getItem('zy_admin_token');

  // Render Login Card if not logged in
  if (!token) {
    return `
      <div class="max-w-md mx-auto px-6 py-24 min-h-[70vh] flex flex-col justify-center relative z-10">
        <div class="glass-card p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(109,40,217,0.2)] border border-white/10 text-center">
          <div class="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-6 text-purple-300">
            <i data-lucide="lock" class="w-6 h-6"></i>
          </div>
          
          <h2 class="text-2xl font-headline font-black text-white tracking-tight mb-2">Admin Portal</h2>
          <p class="text-white/50 text-sm font-light mb-8">Enter your credentials to access the registrations dashboard.</p>
          
          <form id="admin-login-form" class="flex flex-col gap-5 text-left">
            <div class="flex flex-col gap-1.5">
              <label for="admin-user" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">Username</label>
              <input type="text" id="admin-user" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="Username">
            </div>
            
            <div class="flex flex-col gap-1.5">
              <label for="admin-pass" class="text-xs font-semibold text-[#d3bbff] uppercase tracking-wider pl-1 font-sans">Password</label>
              <input type="password" id="admin-pass" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="••••••••">
            </div>
            
            <div id="login-error-msg" class="hidden text-red-400 text-xs font-semibold text-center mt-1 bg-red-950/20 border border-red-900/30 p-3 rounded-lg"></div>
            
            <button type="submit" id="admin-login-submit-btn" class="w-full mt-2 relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_0_30px_rgba(147,51,234,0.4)] border border-purple-400/30 group">
              <span class="btn-text">Log In</span>
              <div class="btn-spinner hidden w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // Render Dashboard if logged in
  return `
    <div class="max-w-7xl mx-auto px-6 py-12 min-h-[80vh] flex flex-col gap-8 relative z-10">
      
      <!-- HEADER -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
        <div>
          <h1 class="text-3xl md:text-4xl font-headline font-black text-white tracking-tight mb-2">Admin Dashboard</h1>
          <p class="text-white/60 text-sm font-light">Monitor registrations, payments, and analytics for workshops.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <button id="refresh-dashboard-btn" class="flex items-center justify-center gap-2 bg-[#53398b]/30 hover:bg-[#53398b]/50 border border-[#d3bbff]/15 px-4 py-3 rounded-xl text-sm font-medium text-[#ecddf9] hover:text-white transition-all cursor-pointer">
            <i data-lucide="rotate-cw" class="w-4 h-4"></i>
            Refresh
          </button>
          <button id="export-csv-btn" class="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 border border-purple-400/20 px-4 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-[1.02] shadow-[0_4px_20px_-5px_rgba(147,51,234,0.3)] cursor-pointer group">
            <i data-lucide="download" class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"></i>
            Export CSV
          </button>
          <button id="logout-btn" class="flex items-center justify-center gap-2 bg-red-950/20 hover:bg-red-900/30 border border-red-500/20 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 transition-all cursor-pointer">
            <i data-lucide="log-out" class="w-4 h-4"></i>
            Logout
          </button>
        </div>
      </div>

      <!-- ANALYTICS CARDS -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="dashboard-stats-grid">
        <!-- Total Registrations -->
        <div class="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden group hover:border-[#d3bbff]/20">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold text-white/50 tracking-wider uppercase">Total Registrations</span>
            <div class="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-300">
              <i data-lucide="users" class="w-4 h-4"></i>
            </div>
          </div>
          <span class="text-4xl font-extrabold text-white tracking-tight" id="stats-total-count">0</span>
          <span class="text-[11px] text-white/40 mt-2 font-medium">All signups initiated</span>
        </div>

        <!-- Total Revenue -->
        <div class="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden group hover:border-[#d3bbff]/20">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold text-white/50 tracking-wider uppercase">Total Revenue</span>
            <div class="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-300">
              <i data-lucide="indian-rupee" class="w-4 h-4"></i>
            </div>
          </div>
          <span class="text-4xl font-extrabold text-emerald-400 tracking-tight" id="stats-revenue">₹0</span>
          <span class="text-[11px] text-emerald-400/60 mt-2 font-medium">Paid registrations only</span>
        </div>

        <!-- Paid Registrations -->
        <div class="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden group hover:border-[#d3bbff]/20">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold text-white/50 tracking-wider uppercase">Paid Tickets</span>
            <div class="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-300">
              <i data-lucide="ticket" class="w-4 h-4"></i>
            </div>
          </div>
          <span class="text-4xl font-extrabold text-white tracking-tight" id="stats-paid-count">0</span>
          <span class="text-[11px] text-white/40 mt-2 font-medium" id="stats-paid-percentage">0% Conversion</span>
        </div>

        <!-- Pending Registrations -->
        <div class="glass-card p-6 rounded-2xl flex flex-col gap-1 relative overflow-hidden group hover:border-[#d3bbff]/20">
          <div class="flex justify-between items-start mb-3">
            <span class="text-xs font-semibold text-white/50 tracking-wider uppercase">Pending Payments</span>
            <div class="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-300">
              <i data-lucide="clock" class="w-4 h-4"></i>
            </div>
          </div>
          <span class="text-4xl font-extrabold text-white tracking-tight" id="stats-pending-count">0</span>
          <span class="text-[11px] text-white/40 mt-2 font-medium">Awaiting checkout</span>
        </div>
      </div>

      <!-- FILTER TOOLBAR -->
      <div class="glass-card p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <!-- Search bar -->
        <div class="relative flex-grow max-w-lg">
          <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40"></i>
          <input type="text" id="dashboard-search-input" class="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all font-sans text-sm" placeholder="Search by name, email, college...">
        </div>
        
        <!-- Filters -->
        <div class="flex flex-wrap items-center gap-3">
          <!-- Status Dropdown -->
          <div class="flex flex-col gap-1 text-left">
            <select id="filter-status-select" class="bg-white/5 border border-white/10 text-white/90 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-[#180f23] transition-all cursor-pointer">
              <option value="all" class="bg-[#180f23]">All Payments</option>
              <option value="Paid" class="bg-[#180f23]">Paid Only</option>
              <option value="Pending" class="bg-[#180f23]">Pending Only</option>
              <option value="Failed" class="bg-[#180f23]">Failed Only</option>
            </select>
          </div>
          
          <!-- Role Dropdown -->
          <div class="flex flex-col gap-1 text-left">
            <select id="filter-role-select" class="bg-white/5 border border-white/10 text-white/90 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 focus:bg-[#180f23] transition-all cursor-pointer">
              <option value="all" class="bg-[#180f23]">All Roles</option>
              <option value="student" class="bg-[#180f23]">Students</option>
              <option value="professional" class="bg-[#180f23]">Professionals</option>
            </select>
          </div>
        </div>
      </div>

      <!-- DATA TABLE -->
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col">
        <div class="overflow-x-auto w-full">
          <table class="w-full text-left border-collapse" id="registrations-table">
            <thead>
              <tr class="bg-white/[0.02] border-b border-white/5 text-white/50 text-xs font-semibold uppercase tracking-wider">
                <th class="py-4 px-6">Date</th>
                <th class="py-4 px-6">Name</th>
                <th class="py-4 px-6">Contact Info</th>
                <th class="py-4 px-6">College / Org</th>
                <th class="py-4 px-6">Role</th>
                <th class="py-4 px-6">Status</th>
                <th class="py-4 px-6">Payment ID</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5" id="registrations-table-body">
              <tr>
                <td colspan="7" class="py-12 text-center text-white/40">
                  <div class="flex flex-col items-center justify-center gap-3">
                    <div class="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
                    <span class="text-sm">Fetching registrations...</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Empty State -->
        <div id="table-empty-state" class="hidden py-16 flex flex-col items-center justify-center text-center">
          <div class="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white/40 shadow-inner">
            <i data-lucide="alert-circle" class="w-8 h-8"></i>
          </div>
          <h3 class="text-lg font-bold text-white mb-1">No Registrations Found</h3>
          <p class="text-white/40 text-sm max-w-xs font-light">Try adjusting your filters or search terms.</p>
        </div>
      </div>

    </div>
  `;
}

export function setupAdminDashboard() {
  const token = sessionStorage.getItem('zy_admin_token');

  // Setup Login Form Event Handler if not authenticated
  if (!token) {
    const loginForm = document.getElementById('admin-login-form');
    const loginSubmitBtn = document.getElementById('admin-login-submit-btn');
    const loginErrorEl = document.getElementById('login-error-msg');

    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('admin-user').value.trim();
        const password = document.getElementById('admin-pass').value.trim();

        if (loginSubmitBtn) {
          loginSubmitBtn.disabled = true;
          loginSubmitBtn.querySelector('.btn-text').classList.add('hidden');
          loginSubmitBtn.querySelector('.btn-spinner').classList.remove('hidden');
        }
        if (loginErrorEl) loginErrorEl.classList.add('hidden');

        const LOGIN_ENDPOINT = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'http://localhost:5000/api/registrations/login'
          : '/api/registrations/login';

        try {
          const response = await fetch(LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });

          const data = await response.json();

          if (response.ok && data.success) {
            sessionStorage.setItem('zy_admin_token', data.token);
            // Reload page to transition to dashboard view
            window.location.reload();
          } else {
            if (loginErrorEl) {
              loginErrorEl.innerText = data.message || 'Invalid username or password.';
              loginErrorEl.classList.remove('hidden');
            }
          }
        } catch (err) {
          console.error('Login error:', err);
          if (loginErrorEl) {
            loginErrorEl.innerText = 'Could not connect to authentication server.';
            loginErrorEl.classList.remove('hidden');
          }
        } finally {
          if (loginSubmitBtn) {
            loginSubmitBtn.disabled = false;
            loginSubmitBtn.querySelector('.btn-text').classList.remove('hidden');
            loginSubmitBtn.querySelector('.btn-spinner').classList.add('hidden');
          }
        }
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
    return;
  }

  // Set up Dashboard event handlers and data loading if authenticated
  let registrationsList = [];
  let filteredList = [];

  const searchInput = document.getElementById('dashboard-search-input');
  const statusSelect = document.getElementById('filter-status-select');
  const roleSelect = document.getElementById('filter-role-select');
  const refreshBtn = document.getElementById('refresh-dashboard-btn');
  const exportBtn = document.getElementById('export-csv-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const tableBody = document.getElementById('registrations-table-body');
  const emptyState = document.getElementById('table-empty-state');

  // API endpoint configuration
  const API_ENDPOINT = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:5000/api/registrations'
    : '/api/registrations';

  // Logout handler
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('zy_admin_token');
      window.location.reload();
    });
  }

  // Fetch registrations listing
  const fetchData = async () => {
    if (tableBody) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="py-12 text-center text-white/40">
            <div class="flex flex-col items-center justify-center gap-3">
              <div class="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
              <span class="text-sm">Fetching registrations...</span>
            </div>
          </td>
        </tr>
      `;
    }
    if (emptyState) emptyState.classList.add('hidden');

    try {
      const response = await fetch(API_ENDPOINT, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (response.ok && data.success) {
        registrationsList = data.data;
        updateStats();
        applyFilters();
      } else {
        showError(data.message || 'Access denied. Please log in again.');
        if (response.status === 401) {
          sessionStorage.removeItem('zy_admin_token');
          setTimeout(() => window.location.reload(), 1500);
        }
      }
    } catch (err) {
      console.error('Fetch Registrations Error:', err);
      showError('Could not connect to the backend server.');
    }
  };

  const showError = (message) => {
    if (tableBody) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="py-12 text-center text-red-400 font-medium">
            <div class="flex flex-col items-center justify-center gap-2">
              <i data-lucide="alert-triangle" class="w-8 h-8"></i>
              <span>${message}</span>
            </div>
          </td>
        </tr>
      `;
    }
    if (window.lucide) window.lucide.createIcons();
  };

  // Calculate analytics values
  const updateStats = () => {
    const totalCountEl = document.getElementById('stats-total-count');
    const revenueEl = document.getElementById('stats-revenue');
    const paidCountEl = document.getElementById('stats-paid-count');
    const paidPercentageEl = document.getElementById('stats-paid-percentage');
    const pendingCountEl = document.getElementById('stats-pending-count');

    const total = registrationsList.length;
    const paidList = registrationsList.filter(item => item.paymentStatus === 'Paid');
    const paidCount = paidList.length;
    const pendingCount = registrationsList.filter(item => item.paymentStatus === 'Pending').length;
    
    const totalRevenue = paidCount * 69;
    const conversionRate = total > 0 ? Math.round((paidCount / total) * 100) : 0;

    if (totalCountEl) totalCountEl.innerText = total.toString();
    if (revenueEl) revenueEl.innerText = `₹${totalRevenue.toLocaleString()}`;
    if (paidCountEl) paidCountEl.innerText = paidCount.toString();
    if (paidPercentageEl) paidPercentageEl.innerText = `${conversionRate}% Conversion`;
    if (pendingCountEl) pendingCountEl.innerText = pendingCount.toString();
  };

  // Filter handlers
  const applyFilters = () => {
    const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedStatus = statusSelect ? statusSelect.value : 'all';
    const selectedRole = roleSelect ? roleSelect.value : 'all';

    filteredList = registrationsList.filter(item => {
      const matchesSearch = searchQuery === '' || 
        (item.fullName && item.fullName.toLowerCase().includes(searchQuery)) ||
        (item.email && item.email.toLowerCase().includes(searchQuery)) ||
        (item.phone && item.phone.toLowerCase().includes(searchQuery)) ||
        (item.institution && item.institution.toLowerCase().includes(searchQuery));

      const matchesStatus = selectedStatus === 'all' || item.paymentStatus === selectedStatus;
      const matchesRole = selectedRole === 'all' || item.role === selectedRole;

      return matchesSearch && matchesStatus && matchesRole;
    });

    renderTable();
  };

  // Populate data rows
  const renderTable = () => {
    if (!tableBody) return;

    if (filteredList.length === 0) {
      tableBody.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    tableBody.innerHTML = filteredList.map(item => {
      const regDate = new Date(item.registrationDate || item.createdAt);
      const formattedDate = regDate.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      });

      let badgeClass = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      if (item.paymentStatus === 'Paid') {
        badgeClass = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      } else if (item.paymentStatus === 'Failed') {
        badgeClass = 'text-red-400 bg-red-500/10 border-red-500/20';
      }

      return `
        <tr class="hover:bg-white/[0.01] transition-colors text-sm text-white/80">
          <td class="py-4 px-6 font-mono text-xs text-white/50">${formattedDate}</td>
          <td class="py-4 px-6 font-semibold text-white">${item.fullName}</td>
          <td class="py-4 px-6">
            <div class="flex flex-col gap-0.5 font-sans">
              <span>${item.email}</span>
              <span class="text-white/40 text-xs">${item.phone}</span>
            </div>
          </td>
          <td class="py-4 px-6 max-w-[200px] truncate" title="${item.institution}">${item.institution}</td>
          <td class="py-4 px-6">
            <span class="capitalize text-xs px-2 py-0.5 rounded bg-white/5 border border-white/5 font-medium">${item.role}</span>
          </td>
          <td class="py-4 px-6">
            <span class="text-xs px-2.5 py-1 rounded-full border ${badgeClass} font-semibold tracking-wide uppercase">${item.paymentStatus}</span>
          </td>
          <td class="py-4 px-6 font-mono text-xs text-white/40" title="Order ID: ${item.razorpayOrderId || ''}">
            ${item.razorpayPaymentId || '<span class="italic text-white/20">Pending</span>'}
          </td>
        </tr>
      `;
    }).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  // CSV Generator
  const exportCSV = () => {
    if (filteredList.length === 0) {
      alert('No data available to export.');
      return;
    }

    const headers = ['Date', 'Name', 'Email', 'Phone', 'Institution', 'Role', 'Status', 'Order ID', 'Payment ID', 'Amount Paid (INR)'];
    const rows = filteredList.map(item => [
      new Date(item.registrationDate || item.createdAt).toLocaleString('en-IN'),
      item.fullName,
      item.email,
      item.phone,
      item.institution,
      item.role,
      item.paymentStatus,
      item.razorpayOrderId || '',
      item.razorpayPaymentId || '',
      item.paymentStatus === 'Paid' ? 69 : 0
    ]);

    const csvRows = [
      headers.join(','),
      ...rows.map(row => row.map(val => `"${String(val).replace(/"/g, '""')}"`).join(','))
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    
    const formattedDate = new Date().toISOString().split('T')[0];
    link.setAttribute("download", `zenithyuga_workshop_registrations_${formattedDate}.csv`);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Event bindings
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (statusSelect) statusSelect.addEventListener('change', applyFilters);
  if (roleSelect) roleSelect.addEventListener('change', applyFilters);
  if (refreshBtn) refreshBtn.addEventListener('click', fetchData);
  if (exportBtn) exportBtn.addEventListener('click', exportCSV);

  // Load dataset
  fetchData();
}
