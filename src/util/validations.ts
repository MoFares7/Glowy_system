import { z } from 'zod';

const branchSchema = z.object({
    branchName: z.string().min(1, 'This Field Is Required'),
    branchNameAR: z.string().min(1, 'This Field Is Required'),
    branchNameTR: z.string().min(1, 'This Field Is Required'),
    branchAddressEN: z.string().min(1, 'This Field Is Required'),
    branchAddressAR: z.string().min(1, 'This Field Is Required'),
    branchAddressTR: z.string().min(1, 'This Field Is Required'),
    branchDescriptionEN: z.string().min(1, 'This Field Is Required'),
    branchDescriptionAR: z.string().min(1, 'This Field Is Required'),
    branchDescriptionTR: z.string().min(1, 'This Field Is Required'),
    availableHours: z.array(z.object({
        day: z.string(),
        from: z.string(),
        to: z.string(),
    })).optional(),
});
