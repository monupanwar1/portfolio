'use client';

import { addData } from '@/actions/action';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';


import { Briefcase, Info, Plus, Trash2, User as UserIcon } from 'lucide-react';
import { useState } from 'react';



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

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
        </div>
        <Card>
          <CardContent>
            <form
              action={addData}
              encType="multipart/form-data"
              className="space-y-6"
            >
              {/* Owner Information Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 border-b pb-2">
                  <UserIcon className="h-5 w-5" /> {/* Use aliased UserIcon */}
                  Owner Information
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name</Label>
                    <Input
                      id="ownerName"
                      name="ownerName"
                      placeholder="Enter owner name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobRole">Job Role</Label>
                    <Input
                      id="jobRole"
                      name="jobRole"
                      placeholder="e.g. Full Stack Developer"
                      required
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
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gmail">Gmail</Label>
                    <Input
                      id="gmail"
                      name="gmail"
                      type="email"
                      placeholder="owner@gmail.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume</Label>
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf"
                      required
                    />
                    <p className="text-xs text-gray-500">
                      Upload resume as PDF
                    </p>
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
                          required
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
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`projectrepo-${project.id}`}>
                          Github repo
                        </Label>
                        <Input
                          id={`projectrepo-${project.id}`}
                          name={`projectrepo-${project.id}`}
                          placeholder="github repo of your project"
                          required
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
                          required
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
                    required
                  />
                  <Label htmlFor="aboutSection">Github</Label>
                  <Input
                    id="Github"
                    name="githubLink"
                    placeholder="github.com"
                    required
                  />
                  <Label htmlFor="aboutSection">Linkedin</Label>
                  <Input
                    id="linkedin"
                    name="LinkedinLink"
                    placeholder="linkedin.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="aboutBio">About Bio</Label>
                  <Textarea
                    id="aboutBio"
                    name="aboutBio"
                    placeholder="Detailed bio for about section"
                    className="min-h-[100px]"
                    required
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
