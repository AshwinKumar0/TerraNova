import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Project, Inquiry } from '../types';
import { Plus, Trash2, Edit, LayoutGrid, MessageSquare, Image as ImageIcon, Save, X, LogOut } from 'lucide-react';

interface AdminProps {
  projects: Project[];
  inquiries: Inquiry[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const Admin: React.FC<AdminProps> = ({ projects, inquiries, setProjects }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'projects' | 'inquiries'>('projects');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    if (isAddingNew) {
      setProjects(prev => [editingProject, ...prev]);
    } else {
      setProjects(prev => prev.map(p => p.id === editingProject.id ? editingProject : p));
    }
    setEditingProject(null);
    setIsAddingNew(false);
  };

  const startNewProject = () => {
    setEditingProject({
      id: Date.now().toString(),
      title: '',
      slug: '',
      type: 'plot',
      price: 0,
      city: '',
      state: '',
      location: { lat: 0, lng: 0 },
      thumbnail: 'https://picsum.photos/800/600',
      images: ['https://picsum.photos/1200/800'],
      shortDescription: '',
      longDescription: '',
      amenities: [],
      status: 'available',
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
    setIsAddingNew(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-950">Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 hover:text-red-800 font-medium text-sm">
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'projects' ? 'bg-emerald-800 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-50'}`}
        >
          <LayoutGrid className="h-5 w-5" /> Manage Projects
        </button>
        <button 
          onClick={() => setActiveTab('inquiries')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'inquiries' ? 'bg-emerald-800 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-stone-50'}`}
        >
          <MessageSquare className="h-5 w-5" /> Inquiries ({inquiries.length})
        </button>
      </div>

      {activeTab === 'projects' && (
        <>
          {editingProject ? (
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="text-xl font-bold">{isAddingNew ? 'Add New Project' : 'Edit Project'}</h2>
                 <button onClick={() => setEditingProject(null)} className="p-2 bg-stone-100 rounded-full hover:bg-stone-200">
                    <X className="h-5 w-5" />
                 </button>
              </div>
              
              <form onSubmit={handleSaveProject} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-text">Project Title</label>
                    <input required className="input-field" value={editingProject.title} onChange={e => setEditingProject({...editingProject, title: e.target.value})} />
                  </div>
                  <div>
                     <label className="label-text">City</label>
                    <input required className="input-field" value={editingProject.city} onChange={e => setEditingProject({...editingProject, city: e.target.value})} />
                  </div>
                  <div>
                     <label className="label-text">State</label>
                    <input required className="input-field" value={editingProject.state} onChange={e => setEditingProject({...editingProject, state: e.target.value})} />
                  </div>
                  <div>
                     <label className="label-text">Price (INR)</label>
                    <input required type="number" className="input-field" value={editingProject.price} onChange={e => setEditingProject({...editingProject, price: Number(e.target.value)})} />
                  </div>
                  <div>
                     <label className="label-text">Type</label>
                    <select className="input-field" value={editingProject.type} onChange={e => setEditingProject({...editingProject, type: e.target.value as any})}>
                      <option value="plot">Plot</option>
                      <option value="villa">Villa</option>
                      <option value="resort">Resort</option>
                    </select>
                  </div>
                  <div>
                     <label className="label-text">Status</label>
                    <select className="input-field" value={editingProject.status} onChange={e => setEditingProject({...editingProject, status: e.target.value as any})}>
                      <option value="available">Available</option>
                      <option value="sold">Sold Out</option>
                    </select>
                  </div>
                </div>

                <div>
                   <label className="label-text">Short Description</label>
                   <textarea className="input-field" rows={2} value={editingProject.shortDescription} onChange={e => setEditingProject({...editingProject, shortDescription: e.target.value})} />
                </div>

                <div>
                   <label className="label-text">Full Description</label>
                   <textarea className="input-field" rows={5} value={editingProject.longDescription} onChange={e => setEditingProject({...editingProject, longDescription: e.target.value})} />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <button type="button" onClick={() => setEditingProject(null)} className="px-6 py-2 rounded-lg text-stone-600 font-medium hover:bg-stone-100">Cancel</button>
                  <button type="submit" className="px-6 py-2 rounded-lg bg-emerald-700 text-white font-bold hover:bg-emerald-800 flex items-center gap-2">
                    <Save className="h-4 w-4" /> Save Project
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="p-6 border-b border-stone-100 flex justify-between items-center">
                 <h3 className="font-bold text-stone-700">All Projects</h3>
                 <button onClick={startNewProject} className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-emerald-800 transition">
                    <Plus className="h-4 w-4" /> Add New
                 </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-stone-600">
                  <thead className="bg-stone-50 text-stone-800 font-semibold">
                    <tr>
                      <th className="p-4">Title</th>
                      <th className="p-4">Type</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">Price</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {projects.map(p => (
                      <tr key={p.id} className="hover:bg-stone-50">
                        <td className="p-4 font-medium text-stone-900">{p.title}</td>
                        <td className="p-4 uppercase text-xs font-bold">{p.type}</td>
                        <td className="p-4">{p.city}, {p.state}</td>
                        <td className="p-4">₹{p.price.toLocaleString('en-IN')}</td>
                        <td className="p-4 text-right">
                          <button onClick={() => { setEditingProject(p); setIsAddingNew(false); }} className="text-blue-600 hover:text-blue-800 mr-4">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === 'inquiries' && (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
           <div className="p-6 border-b border-stone-100">
             <h3 className="font-bold text-stone-700">Recent Inquiries</h3>
           </div>
           <div className="overflow-x-auto">
             <table className="w-full text-left text-sm text-stone-600">
               <thead className="bg-stone-50 text-stone-800 font-semibold">
                 <tr>
                   <th className="p-4">Date</th>
                   <th className="p-4">Name</th>
                   <th className="p-4">Contact</th>
                   <th className="p-4">Project</th>
                   <th className="p-4">Message</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-stone-100">
                 {inquiries.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-stone-400">No inquiries yet.</td></tr>
                 ) : (
                   inquiries.map(inquiry => (
                     <tr key={inquiry.id} className="hover:bg-stone-50">
                       <td className="p-4 whitespace-nowrap">{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                       <td className="p-4 font-bold text-stone-900">{inquiry.name}</td>
                       <td className="p-4">
                         <div className="text-xs">{inquiry.email}</div>
                         <div className="text-xs">{inquiry.phone}</div>
                       </td>
                       <td className="p-4 text-emerald-800 font-medium">{inquiry.projectTitle}</td>
                       <td className="p-4 max-w-xs truncate">{inquiry.message}</td>
                     </tr>
                   ))
                 )}
               </tbody>
             </table>
           </div>
        </div>
      )}
      
      <style>{`
        .label-text {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #57534e; /* stone-600 */
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .input-field {
          width: 100%;
          padding: 0.75rem;
          background-color: #fafaf9; /* stone-50 */
          border: 1px solid #e7e5e4; /* stone-200 */
          border-radius: 0.5rem;
          outline: none;
        }
        .input-field:focus {
           box-shadow: 0 0 0 2px #10b981;
           border-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Admin;
