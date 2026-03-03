import { useState } from 'react'
import {
  Download, Plus, Trash2, Edit, Check, AlertCircle, Info, Loader2,
  Settings, LogOut, User, ChevronDown, Star, Bell,
} from 'lucide-react'

import { Button }          from '@/components/ui/button'
import { Badge }           from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Input }           from '@/components/ui/input'
import { Label }           from '@/components/ui/label'
import { Textarea }        from '@/components/ui/textarea'
import { Switch }          from '@/components/ui/switch'
import { Progress }        from '@/components/ui/progress'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator }       from '@/components/ui/separator'
import { StatCard }        from '@/components/ui/stat-card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <div>
        <h3
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-lg font-semibold text-[var(--color-ink)] tracking-[-0.015em]"
        >
          {title}
        </h3>
        {description && <p className="text-[0.8125rem] text-[var(--color-muted)] mt-0.5">{description}</p>}
      </div>
      {children}
    </div>
  )
}

export function ComponentsSection() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(false)
  const [progress] = useState(68)

  return (
    <section id="components" className="scroll-mt-20 space-y-10">
      <div>
        <h2 className="page-title text-2xl mb-1">Components</h2>
        <p className="text-[0.9375rem] text-[var(--color-muted)]">
          Precise, restrained components with consistent 150ms transitions and shared focus ring patterns.
        </p>
      </div>

      {/* Stat Cards */}
      <Section title="Stat Cards" description="Large display number with left accent stripe and hover lift.">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Active Orders" value="142" detail="↑ 12% from last week" accent="primary" />
          <StatCard label="Completed"     value="89"  detail="This month"            accent="success" />
          <StatCard label="Pending"       value="23"  detail="Awaiting dispatch"     accent="warning" />
          <StatCard label="Overdue"       value="4"   detail="Requires attention"    accent="danger"  />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Revenue"       value="$48k" detail="YTD"                  accent="primary" dense />
          <StatCard label="Avg. Time"     value="2.4h" detail="Per order"            accent="success" dense />
          <StatCard label="Crew Util."    value="87%"  detail="Across 6 teams"       accent="warning" dense />
          <StatCard label="Error Rate"    value="0.3%" detail="Last 30 days"         accent="danger"  dense />
        </div>
      </Section>

      <Separator />

      {/* Buttons */}
      <Section title="Buttons" description="5 variants, 4 sizes. Shared 150ms transitions and focus ring pattern.">
        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Variants */}
            <div>
              <p className="label-mono mb-3">Variants</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="success">Success</Button>
              </div>
            </div>
            {/* Sizes */}
            <div>
              <p className="label-mono mb-3">Sizes</p>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon" variant="secondary"><Settings className="h-4 w-4" /></Button>
              </div>
            </div>
            {/* With Icons */}
            <div>
              <p className="label-mono mb-3">With Icons</p>
              <div className="flex flex-wrap gap-2">
                <Button><Plus className="h-3.5 w-3.5" strokeWidth={2.5} /> New Quote</Button>
                <Button variant="secondary"><Download className="h-3.5 w-3.5" /> Export</Button>
                <Button variant="outline"><Edit className="h-3.5 w-3.5" /> Edit</Button>
                <Button variant="destructive"><Trash2 className="h-3.5 w-3.5" /> Delete</Button>
                <Button variant="success"><Check className="h-3.5 w-3.5" /> Confirm</Button>
              </div>
            </div>
            {/* States */}
            <div>
              <p className="label-mono mb-3">States</p>
              <div className="flex flex-wrap gap-2">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
                <Button><Loader2 className="h-3.5 w-3.5 animate-spin" /> Loading…</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Badges */}
      <Section title="Badges" description="Pill-shaped status indicators, 11px/600 weight.">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Active</Badge>
              <Badge variant="destructive">Error</Badge>
              <Badge variant="warning">Pending</Badge>
              <Badge variant="success">Completed</Badge>
              <Badge variant="destructive">Overdue</Badge>
              <Badge variant="warning">In Review</Badge>
              <Badge variant="default">v2.1.0</Badge>
              <Badge variant="secondary">Draft</Badge>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Cards */}
      <Section title="Cards" description="Compound component with 6 subcomponents. Hover shadow on light, primary glow on dark.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Work Order #4821</CardTitle>
              <CardDescription>Scheduled maintenance — Unit 7B</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between text-[0.8125rem]">
                  <span className="text-[var(--color-muted)]">Status</span>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex justify-between text-[0.8125rem]">
                  <span className="text-[var(--color-muted)]">Assigned</span>
                  <span className="text-[var(--color-ink)] font-medium">Team Alpha</span>
                </div>
                <div className="flex justify-between text-[0.8125rem]">
                  <span className="text-[var(--color-muted)]">Due</span>
                  <span className="text-[var(--color-ink)]">Mar 15, 2026</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[0.75rem] text-[var(--color-muted)]">
                    <span>Progress</span><span>68%</span>
                  </div>
                  <Progress value={progress} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-2 justify-end">
              <Button variant="ghost" size="sm">View Details</Button>
              <Button size="sm">Update</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispatch Queue</CardTitle>
              <CardDescription>3 items pending assignment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { id: '#0021', label: 'HVAC Inspection',    badge: 'warning' as const, time: '09:00' },
                  { id: '#0022', label: 'Electrical Repair',  badge: 'destructive' as const, time: '11:30' },
                  { id: '#0023', label: 'Plumbing Check',     badge: 'default' as const, time: '14:00' },
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-2 border-b border-[var(--color-border-light)] last:border-0">
                    <div>
                      <p className="text-[0.8125rem] font-medium text-[var(--color-ink)]">{item.label}</p>
                      <p className="text-[0.75rem] text-[var(--color-muted)]">{item.id} · {item.time}</p>
                    </div>
                    <Badge variant={item.badge}>{item.badge === 'warning' ? 'Urgent' : item.badge === 'destructive' ? 'Critical' : 'Queued'}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Crew Utilization</CardTitle>
              <CardDescription>Across 6 active teams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'Team Alpha',  pct: 92, badge: 'destructive' as const },
                  { name: 'Team Bravo',  pct: 75, badge: 'warning' as const },
                  { name: 'Team Delta',  pct: 58, badge: 'success' as const },
                  { name: 'Team Echo',   pct: 40, badge: 'success' as const },
                ].map((crew) => (
                  <div key={crew.name} className="space-y-1">
                    <div className="flex justify-between text-[0.75rem]">
                      <span className="text-[var(--color-ink)] font-medium">{crew.name}</span>
                      <span className="text-[var(--color-muted)]">{crew.pct}%</span>
                    </div>
                    <Progress value={crew.pct} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Separator />

      {/* Forms */}
      <Section title="Form Controls" description="44px height inputs, 150ms transitions, accessible focus rings.">
        <Card>
          <CardContent className="pt-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="e.g. Erik Nordberg" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="erik@company.no" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="search">Search</Label>
                  <Input id="search" placeholder="Search orders, crews…" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="error-input">Project Code <span className="text-[var(--color-danger)]">*</span></Label>
                  <Input
                    id="error-input"
                    placeholder="PRJ-XXXX"
                    style={{
                      borderColor: 'var(--color-danger)',
                      boxShadow: '0 0 0 3px rgba(196,32,10,0.06)',
                    }}
                  />
                  <p className="text-[0.75rem] text-[var(--color-danger)] flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> Project code is required
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="notes">Work Notes</Label>
                  <Textarea id="notes" placeholder="Describe the work required…" rows={4} />
                </div>
                <div className="space-y-3 pt-1">
                  <p className="label-mono">Preferences</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.8125rem] font-medium text-[var(--color-ink)]">Email Notifications</p>
                      <p className="text-[0.75rem] text-[var(--color-muted)]">Receive updates on order status</p>
                    </div>
                    <Switch checked={notifications} onCheckedChange={setNotifications} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[0.8125rem] font-medium text-[var(--color-ink)]">Auto-save Drafts</p>
                      <p className="text-[0.75rem] text-[var(--color-muted)]">Save work every 30 seconds</p>
                    </div>
                    <Switch checked={autoSave} onCheckedChange={setAutoSave} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Dialog */}
      <Section title="Dialog" description="Modal overlay with focus trap, 448px max-width, Escape to close.">
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-2">
              <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
              <Button variant="secondary" onClick={() => setDialogOpen(true)}>
                <Info className="h-3.5 w-3.5" /> Info Dialog
              </Button>
            </div>
          </CardContent>
        </Card>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Action</DialogTitle>
              <DialogDescription>
                This will permanently archive work order #4821 and notify the assigned crew. This action can be undone within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 p-3 rounded-[var(--radius-md)] bg-[var(--color-warning-bg)] border border-[var(--color-warning-bg)] flex gap-2">
              <AlertCircle className="h-4 w-4 text-[var(--color-warning)] shrink-0 mt-0.5" />
              <p className="text-[0.8125rem] text-[var(--color-warning)]">Team Alpha will be notified and the schedule will be updated.</p>
            </div>
            <DialogFooter>
              <Button variant="secondary" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={() => setDialogOpen(false)}>Confirm Archive</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Section>

      <Separator />

      {/* Dropdown */}
      <Section title="Dropdown Menu" description="Radix-powered dropdown with KolNord hover states.">
        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">
                    Options <ChevronDown className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Edit className="h-3.5 w-3.5 mr-2" /> Edit Work Order</DropdownMenuItem>
                  <DropdownMenuItem><Download className="h-3.5 w-3.5 mr-2" /> Export PDF</DropdownMenuItem>
                  <DropdownMenuItem><Star className="h-3.5 w-3.5 mr-2" /> Mark Priority</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-[var(--color-danger)] focus:text-[var(--color-danger)] focus:bg-[var(--color-danger-bg)]">
                    <Trash2 className="h-3.5 w-3.5 mr-2" /> Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><User className="h-3.5 w-3.5 mr-2" /> Profile</DropdownMenuItem>
                  <DropdownMenuItem><Settings className="h-3.5 w-3.5 mr-2" /> Settings</DropdownMenuItem>
                  <DropdownMenuItem><Bell className="h-3.5 w-3.5 mr-2" /> Notifications</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><LogOut className="h-3.5 w-3.5 mr-2" /> Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>
      </Section>

      <Separator />

      {/* Avatar */}
      <Section title="Avatars" description="Initials fallback with primary tint background.">
        <Card>
          <CardContent className="pt-6 flex items-center gap-3 flex-wrap">
            {[
              { initials: 'EN', size: 'h-8 w-8 text-xs' },
              { initials: 'TB', size: 'h-9 w-9 text-xs' },
              { initials: 'AL', size: 'h-10 w-10 text-sm' },
              { initials: 'KN', size: 'h-12 w-12 text-sm' },
              { initials: 'MR', size: 'h-14 w-14 text-base' },
            ].map((av) => (
              <Avatar key={av.initials} className={av.size}>
                <AvatarFallback className={av.size}>{av.initials}</AvatarFallback>
              </Avatar>
            ))}
          </CardContent>
        </Card>
      </Section>
    </section>
  )
}
