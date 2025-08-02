'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
  Download,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  RefreshCw,
  Plus,
  Trash2,
  User,
  Briefcase,
  ImageIcon,
  Code,
  Info,
  Mail,
  ExternalLink,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

;


// Mock data for demonstration
const mockProjects = [
  {
    id: 1,
    ownerName: 'John Doe',
    jobRole: 'Full Stack Developer',
    Bio: 'Passionate developer with 5 years of experience',
    projectImages:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400',
    aboutSection: 'Building innovative web solutions',
    projectTitle: 'E-commerce Platform',
    projectTechStack: 'React, Node.js, MongoDB, TypeScript',
    projectDescription:
      'A full-featured e-commerce platform with payment integration and admin dashboard',
    aboutBio:
      'Experienced in modern web technologies and passionate about creating user-friendly applications',
    gmail: 'john.doe@gmail.com',
    github: 'github',
    linkedin: 'linkedin',
  },
  {
    id: 2,
    ownerName: 'Jane Smith',
    jobRole: 'Frontend Developer',
    bio: 'UI/UX focused developer creating beautiful interfaces',
    projectImages:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
    aboutSection: 'Crafting exceptional user experiences',
    projectTitle: 'Task Management App',
    projectTechStack: 'Vue.js, Firebase, Tailwind CSS',
    projectDescription:
      'A collaborative task management application with real-time updates and team features',
    aboutBio:
      'Specializing in frontend development with a keen eye for design and user experience',
    gmail: 'jane.smith@gmail.com',
    github: 'github',
    linkedin: 'linkedin',
  },
];

export default function Dashboard() {
 
  const [projects, setProjects] = useState([{ id: 1 }]);
  const { toast } = useToast();

  const addProject = () => {
    setProjects([...projects, { id: Date.now() }]);
  };

  const removeProject = (id: number) => {
    if (projects.length > 1) {
      setProjects(projects.filter((project) => project.id !== id));
    }
  };

  const totalProjects = mockProjects.length;
  const uniqueTechStacks = new Set(
    mockProjects.flatMap((p) => p.projectTechStack.split(', ')),
  ).size;
  const totalImages = mockProjects.filter((p) => p.projectImages).length;

  

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
           Dashboard
          </h1>
         
        </div>

        

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Total Projects
                  </p>
                  <p className="text-2xl font-bold">{totalProjects}</p>
                </div>
                <Briefcase className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Tech Stacks
                  </p>
                  <p className="text-2xl font-bold">{uniqueTechStacks}</p>
                </div>
                <Code className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Projects with Images
                  </p>
                  <p className="text-2xl font-bold">{totalImages}</p>
                </div>
                <ImageIcon className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-4 mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">All Projects</h2>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add New Project
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">
                        {project.projectTitle}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="h-4 w-4" />
                        {project.ownerName} • {project.jobRole}
                      </div>
                    </div>
                    {project.projectImages && (
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={project.projectImages || '/placeholder.svg'}
                          height={200}
                          width={200}
                          alt={project.projectTitle}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {project.projectDescription}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.projectTechStack
                        .split(', ')
                        .map((tech, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      About
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {project.aboutSection}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="h-4 w-4" />
                      {project.gmail}
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Add Project Form */}
        <Card className="w-full mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add New Project
            </CardTitle>
            <div className="text-sm text-gray-600">
              Fill in the details below to add a new project to your dashboard
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              {/* Owner Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 border-b pb-2">
                  <User className="h-5 w-5" />
                  Owner Information
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input
                      id="ownerName"
                      name="ownerName"
                      placeholder="Enter owner name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobRole">Job Role</Label>
                    <Input
                      id="jobRole"
                      name="jobRole"
                      placeholder="e.g. Full Stack Developer"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Brief bio about the owner"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gmail">Gmail</Label>
                    <Input
                      id="gmail"
                      name="gmail"
                      type="email"
                      placeholder="owner@gmail.com"
                    />
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-2">
                  <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                    <Briefcase className="h-5 w-5" />
                    Projects ({projects.length})
                  </div>
                  <Button
                    type="button"
                    onClick={addProject}
                    size="sm"
                    variant="outline"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Project
                  </Button>
                </div>

                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="border rounded-lg p-4 space-y-4 bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-800">
                        Project {index + 1}
                      </h4>
                      {projects.length > 1 && (
                        <Button
                          type="button"
                          onClick={() => removeProject(project.id)}
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor={`projectTitle-${project.id}`}>
                          Project Title
                        </Label>
                        <Input
                          id={`projectTitle-${project.id}`}
                          name={`projectTitle-${project.id}`}
                          placeholder="Enter project title"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`projectTechStack-${project.id}`}>
                          Tech Stack
                        </Label>
                        <Input
                          id={`projectTechStack-${project.id}`}
                          name={`projectTechStack-${project.id}`}
                          placeholder="e.g. React, Node.js, MongoDB, TypeScript"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`projectDescription-${project.id}`}>
                          Project Description
                        </Label>
                        <Textarea
                          id={`projectDescription-${project.id}`}
                          name={`projectDescription-${project.id}`}
                          placeholder="Detailed description of the project"
                          className="min-h-[120px]"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`projectImages-${project.id}`}>
                          Project Image
                        </Label>
                        <Input
                          id={`projectImages-${project.id}`}
                          name={`projectImages-${project.id}`}
                          type="file"
                          accept="image/*"
                        />
                        <p className="text-xs text-gray-500">
                          Upload an image for this project
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* About Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 border-b pb-2">
                  <Info className="h-5 w-5" />
                  About Section
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aboutSection">About Section</Label>
                  <Textarea
                    id="aboutSection"
                    name="aboutSection"
                    placeholder="General about section content"
                    className="min-h-[100px]"
                  />
                  <Label htmlFor="aboutSection">Github</Label>
                  <Input
                    id="Github"
                    name="githubLink"
                    placeholder="github.com"
                    
                  />
                  <Label htmlFor="aboutSection">Linkedin</Label>
                  <Input
                    id="linkedin"
                    name="LinkedinLink"
                    placeholder="linkedin.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aboutBio">About Bio</Label>
                  <Textarea
                    id="aboutBio"
                    name="aboutBio"
                    placeholder="Detailed bio for about section"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <Button type="submit" className="px-8">
                  <Plus className="h-4 w-4 mr-2" />
                  Add All Projects
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
