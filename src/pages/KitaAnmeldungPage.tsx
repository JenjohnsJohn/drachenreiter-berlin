import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Send } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  // KiTa selection
  kita: z.string().min(1, 'Bitte wählen Sie eine KiTa aus.'),

  // Child info
  childLastName: z.string().min(1, 'Pflichtfeld'),
  childFirstName: z.string().min(1, 'Pflichtfeld'),
  childGender: z.string().min(1, 'Pflichtfeld'),
  childStreet: z.string().min(1, 'Pflichtfeld'),
  childHouseNumber: z.string().min(1, 'Pflichtfeld'),
  childZip: z.string().min(5, 'Bitte gültige PLZ eingeben'),
  childCity: z.string().min(1, 'Pflichtfeld'),
  childBirthDate: z.string().min(1, 'Pflichtfeld'),
  childHealthNotes: z.string().optional(),
  childDisability: z.string().min(1, 'Pflichtfeld'),
  childIntegration: z.string().optional(),
  childIntegrationStatus: z.string().optional(),

  // Care preferences
  careStartEarliest: z.string().min(1, 'Pflichtfeld'),
  careChildAge: z.string().optional(),
  careStartLatest: z.string().optional(),
  careType: z.string().min(1, 'Pflichtfeld'),
  careSpecialWishes: z.string().optional(),

  // Guardian 1
  g1LastName: z.string().min(1, 'Pflichtfeld'),
  g1FirstName: z.string().min(1, 'Pflichtfeld'),
  g1Gender: z.string().min(1, 'Pflichtfeld'),
  g1Nationality: z.string().optional(),
  g1MotherLanguage: z.string().optional(),
  g1Street: z.string().min(1, 'Pflichtfeld'),
  g1HouseNumber: z.string().min(1, 'Pflichtfeld'),
  g1Zip: z.string().min(5, 'Bitte gültige PLZ eingeben'),
  g1City: z.string().min(1, 'Pflichtfeld'),
  g1Phone: z.string().optional(),
  g1Mobile: z.string().optional(),
  g1Email: z.string().email('Bitte gültige E-Mail eingeben'),
  g1Profession: z.string().optional(),
  g1Engagement: z.string().optional(),

  // Guardian 2 (optional)
  g2LastName: z.string().optional(),
  g2FirstName: z.string().optional(),
  g2Gender: z.string().optional(),
  g2Email: z.string().optional(),
  g2Phone: z.string().optional(),
  g2Mobile: z.string().optional(),

  // Siblings
  hasSiblings: z.string().min(1, 'Pflichtfeld'),
  siblingCount: z.string().optional(),
  sibling1Name: z.string().optional(),
  sibling1BirthDate: z.string().optional(),
  sibling1Gender: z.string().optional(),

  // Future sibling placement
  futureSiblingInterest: z.string().optional(),

  // Open questions
  howFoundUs: z.string().optional(),
  whatInterests: z.string().optional(),
  staffCooperation: z.string().optional(),
  importantForChild: z.string().optional(),
  childLikes: z.string().optional(),

  // Confirmation
  confirmed: z.boolean().refine((val) => val === true, 'Bitte bestätigen Sie Ihre Angaben.'),
});

type FormData = z.infer<typeof formSchema>;

const KitaAnmeldungPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      kita: '',
      childGender: '',
      childDisability: 'nein',
      childIntegration: 'nein',
      careType: '',
      g1Gender: '',
      hasSiblings: 'nein',
      confirmed: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <>
        <PageHero
          title="Platzanfrage gesendet"
          breadcrumbs={[{ label: 'KiTa Anmeldung' }]}
        />
        <section className="section-padding bg-warm-white">
          <div className="container-custom max-w-2xl text-center">
            <CheckCircle className="w-16 h-16 text-sage mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-berlin-charcoal mb-4">
              Vielen Dank für Ihre Anfrage!
            </h2>
            <p className="font-body text-berlin-light leading-relaxed mb-4">
              Die Kitaleitung wird sich mit Ihnen bezüglich Ihrer Anfrage zeitnah in
              Verbindung setzen.
            </p>
            <p className="font-body text-sm text-berlin-light">
              Bitte beachten Sie, dass durch Ausfüllen und Absenden dieses Formulars
              kein Aufnahmevertrag zustande kommt.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        title="Platzanfrage Kindertagesstätten"
        subtitle="Füllen Sie das nachfolgende Formular vollständig aus. Durch Absenden kommt kein Aufnahmevertrag zustande."
        breadcrumbs={[{ label: 'KiTa Anmeldung' }]}
      />

      <section className="section-padding bg-warm-white">
        <div className="container-custom max-w-3xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

              {/* KiTa Selection */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  KiTa auswählen
                </h2>
                <FormField
                  control={form.control}
                  name="kita"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gewünschte KiTa *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="drachenhoehle">KiTa Drachenhöhle — Prenzlauer Berg</SelectItem>
                          <SelectItem value="drachenkids">KiTa Drachen Kids — Hellersdorf</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Section 1: Child Data */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  1. Persönliche Daten des Kindes
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="childLastName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl><Input placeholder="Nachname" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="childFirstName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vorname *</FormLabel>
                      <FormControl><Input placeholder="Vorname" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="childGender" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Geschlecht *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Bitte wählen..." /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="maedchen">Mädchen</SelectItem>
                          <SelectItem value="junge">Junge</SelectItem>
                          <SelectItem value="divers">Divers</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="childBirthDate" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Geburtsdatum *</FormLabel>
                      <FormControl><Input type="date" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                  <div className="sm:col-span-2">
                    <FormField control={form.control} name="childStreet" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Straße *</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="childHouseNumber" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nr. *</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="childZip" render={({ field }) => (
                    <FormItem>
                      <FormLabel>PLZ *</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="mt-4">
                  <FormField control={form.control} name="childCity" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ort *</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="mt-4">
                  <FormField control={form.control} name="childHealthNotes" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Besondere Hinweise zum Gesundheitszustand</FormLabel>
                      <FormControl><Textarea rows={3} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <FormField control={form.control} name="childDisability" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Behinderung vorhanden? *</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="ja" id="disability-ja" />
                            <Label htmlFor="disability-ja">Ja</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="nein" id="disability-nein" />
                            <Label htmlFor="disability-nein">Nein</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="childIntegration" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Integrationskind?</FormLabel>
                      <FormControl>
                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="ja" id="integration-ja" />
                            <Label htmlFor="integration-ja">Ja</Label>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="nein" id="integration-nein" />
                            <Label htmlFor="integration-nein">Nein</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                {form.watch('childIntegration') === 'ja' && (
                  <div className="mt-4">
                    <FormField control={form.control} name="childIntegrationStatus" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Integrationsstatus</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger><SelectValue placeholder="Bitte wählen..." /></SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="sph-a">SpH A</SelectItem>
                            <SelectItem value="sph-b">SpH B</SelectItem>
                            <SelectItem value="behindertenausweis">Behindertenausweis</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                )}
              </div>

              {/* Section 2: Care Preferences */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  2. Betreuungswünsche
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="careStartEarliest" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aufnahme frühestens ab *</FormLabel>
                      <FormControl><Input type="date" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="careChildAge" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alter des Kindes zum Betreuungsbeginn</FormLabel>
                      <FormControl><Input placeholder="z.B. 1 Jahr 3 Monate" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="careStartLatest" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Aufnahme spätestens bis</FormLabel>
                      <FormControl><Input type="date" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="careType" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Betreuungsform *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Bitte wählen..." /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ganztags">Ganztags</SelectItem>
                          <SelectItem value="ganztags-erweitert">Ganztags erweitert</SelectItem>
                          <SelectItem value="halbtags">Halbtags</SelectItem>
                          <SelectItem value="teilzeit">Teilzeit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="mt-4">
                  <FormField control={form.control} name="careSpecialWishes" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Besondere Wünsche zum Betreuungszeitraum</FormLabel>
                      <FormControl><Textarea rows={2} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Section 3: Guardian 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  3. Erziehungsberechtigte/r 1
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="g1LastName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl><Input placeholder="Nachname" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1FirstName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vorname *</FormLabel>
                      <FormControl><Input placeholder="Vorname" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Gender" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Geschlecht *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Bitte wählen..." /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="maennlich">Männlich</SelectItem>
                          <SelectItem value="weiblich">Weiblich</SelectItem>
                          <SelectItem value="divers">Divers</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Nationality" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Staatsbürgerschaft</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1MotherLanguage" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Muttersprache/n</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-4 gap-4 mt-4">
                  <div className="sm:col-span-2">
                    <FormField control={form.control} name="g1Street" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Straße *</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="g1HouseNumber" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nr. *</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Zip" render={({ field }) => (
                    <FormItem>
                      <FormLabel>PLZ *</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <FormField control={form.control} name="g1City" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ort *</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon (tagsüber)</FormLabel>
                      <FormControl><Input type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Mobile" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Handynummer</FormLabel>
                      <FormControl><Input type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail *</FormLabel>
                      <FormControl><Input type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Profession" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Beruf/Tätigkeit</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g1Engagement" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mögliches Engagement für die KiTa</FormLabel>
                      <FormControl><Input {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Section 3b: Guardian 2 (Optional) */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-2">
                  Erziehungsberechtigte/r 2
                </h2>
                <p className="font-body text-sm text-berlin-light mb-6">(optional)</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField control={form.control} name="g2LastName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl><Input placeholder="Nachname" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g2FirstName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vorname</FormLabel>
                      <FormControl><Input placeholder="Vorname" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g2Gender" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Geschlecht</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger><SelectValue placeholder="Bitte wählen..." /></SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="maennlich">Männlich</SelectItem>
                          <SelectItem value="weiblich">Weiblich</SelectItem>
                          <SelectItem value="divers">Divers</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g2Email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl><Input type="email" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g2Phone" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon</FormLabel>
                      <FormControl><Input type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="g2Mobile" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Handynummer</FormLabel>
                      <FormControl><Input type="tel" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Section 4: Siblings */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  4. Geschwisterkinder
                </h2>
                <FormField control={form.control} name="hasSiblings" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Geschwister vorhanden? *</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="ja" id="siblings-ja" />
                          <Label htmlFor="siblings-ja">Ja</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="nein" id="siblings-nein" />
                          <Label htmlFor="siblings-nein">Nein</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                {form.watch('hasSiblings') === 'ja' && (
                  <div className="mt-4 space-y-4">
                    <FormField control={form.control} name="siblingCount" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Anzahl der Geschwister</FormLabel>
                        <FormControl><Input type="number" min="1" max="10" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <div className="grid sm:grid-cols-3 gap-4">
                      <FormField control={form.control} name="sibling1Name" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl><Input placeholder="Vor- und Nachname" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="sibling1BirthDate" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Geburtsdatum</FormLabel>
                          <FormControl><Input type="date" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="sibling1Gender" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Geschlecht</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger><SelectValue placeholder="Wählen..." /></SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="maedchen">Mädchen</SelectItem>
                              <SelectItem value="junge">Junge</SelectItem>
                              <SelectItem value="divers">Divers</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>
                  </div>
                )}
              </div>

              {/* Section 5: Future Sibling */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  5. Platzanfrage für Geschwisterkind
                </h2>
                <FormField control={form.control} name="futureSiblingInterest" render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interesse an künftigem KiTa-Platz für ein weiteres Kind?</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="ja" id="future-ja" />
                          <Label htmlFor="future-ja">Ja</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="nein" id="future-nein" />
                          <Label htmlFor="future-nein">Nein</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              {/* Section 6: Open Questions */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-display text-2xl font-semibold text-berlin-charcoal mb-6">
                  6. Weitere Fragen
                </h2>
                <div className="space-y-4">
                  <FormField control={form.control} name="howFoundUs" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Wie sind Sie auf unsere KiTa aufmerksam geworden?</FormLabel>
                      <FormControl><Textarea rows={2} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="whatInterests" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Was interessiert Sie an unserer KiTa besonders?</FormLabel>
                      <FormControl><Textarea rows={2} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="staffCooperation" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Worauf legen Sie in der Zusammenarbeit mit dem pädagogischen Personal Wert?</FormLabel>
                      <FormControl><Textarea rows={2} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="importantForChild" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Was ist Ihnen für Ihr Kind und seine KiTa-Betreuung wichtig?</FormLabel>
                      <FormControl><Textarea rows={2} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="childLikes" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Was mag Ihr Kind gerne?</FormLabel>
                      <FormControl><Textarea rows={2} {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Confirmation */}
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <FormField
                  control={form.control}
                  name="confirmed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-body text-sm text-berlin-light leading-relaxed">
                          Hiermit bestätige ich die Richtigkeit und Vollständigkeit meiner Angaben.
                          Mir ist bewusst, dass durch vorsätzliche Fehlangaben die Anfrage nicht
                          bearbeitet wird. Durch Ausfüllen und Absenden dieses Formulars kommt noch
                          kein Aufnahmevertrag zustande.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-dragon-green text-white font-ui font-semibold text-lg rounded-lg hover:bg-dragon-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  Platzanfrage absenden
                </button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default KitaAnmeldungPage;
